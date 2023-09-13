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

  "files.associations": {
    "*.heex": "phoenix-heex"
  },

  "files.exclude": {
    "**/_build": true,
    "**/deps": true,
    "**/priv/static": true,
    "**/.elixir_ls": true
  },

  "[elixir]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "tunchamroeun.mix-format"
  },

  "[phoenix-heex]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "tunchamroeun.mix-format"
  },

  "emmet.includeLanguages": {
    "elixir": "html",
    "phoenix-heex": "html"
  },
  "emmet.triggerExpansionOnTab": true
}
```