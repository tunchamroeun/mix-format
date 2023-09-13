# mix-format README
reimplement of https://github.com/animus-coop/vscode-elixir-formatter.git

run `mix format` for elixir

## Features

Help running `mix format -` to format file

## Requirements

1 - Installed `elixir`

## Configuration
`.vscode/settings.json`
```json
{
    "elixirLS.suggestSpecs": false,
    "elixirLS.dialyzerEnabled": true,
    "elixirLS.signatureAfterComplete": false,
    "elixirLS.fetchDeps": false,
    "editor.formatOnSave": true,
    "files.associations": {
        "*.heex": "phoenix-heex"
    },
    "[elixi]": {
        "editor.defaultFormatter": "tunchamroeun.mix-format"
    },
    "[phoenix-heex]": {
        "editor.defaultFormatter": "tunchamroeun.mix-format"
    },
    "files.exclude": {
        "**/_build": true,
        "**/deps": true,
        "**/priv/static": true,
        "**/.elixir_ls": true
    },
    "emmet.includeLanguages": {
        "elixir": "html",
        "phoenix-heex": "html"
    },
    "emmet.triggerExpansionOnTab": true
}
```