import { languages, ExtensionContext } from "vscode";
import { extname } from "path";
import {
  workspace,
  commands,
  Range,
  TextDocument,
  TextEdit,
  window,
} from "vscode";
import cp = require("child_process");

function fullDocumentRange(document: TextDocument): Range {
  const lastLineId = document.lineCount - 1;
  return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}

function format(document: TextDocument): Promise<TextEdit[]> {
  return new Promise((resolve, reject) => {
    const ext = extname(document.fileName);
    const cwd = workspace.workspaceFolders?.at(0)?.uri.path || ".";
    const result = cp.spawnSync(
      "mix",
      ["format", "--stdin-filename", `stdin${ext}`, "-"],
      {
        cwd: cwd,
        input: document.getText(),
        encoding: "utf-8",
      }
    );

    if (result.stderr === "" && result.stdout !== "") {
      const textEditor = window.activeTextEditor;
      if (!textEditor) {
        return;
      }
      textEditor.edit((editBuilder) => {
        editBuilder.replace(fullDocumentRange(document), result.stdout);
      });
    } else {
      window.showErrorMessage("Something went wrong!");
    }
  });
}

export function activate(context: ExtensionContext) {
  languages.registerDocumentFormattingEditProvider(["phoenix-heex", "elixir"], {
    provideDocumentFormattingEdits(
      document: TextDocument
    ): Thenable<TextEdit[]> {
      return document.save().then(() => {
        return format(document);
      });
    },
  });

  let disposable = commands.registerCommand("mix-format.formatFile", () => {
    const textEditor = window.activeTextEditor;
    if (!textEditor) {
      return;
    }
    format(textEditor.document);
  });

  context.subscriptions.push(disposable);
}
