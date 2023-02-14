const RuleConfigSeverity = Object.freeze({
  Off: 0,
  Waring: 1,
  Error: 2,
})

/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    '@antfu',
  ],
  rules: {
    'complexity': [
      RuleConfigSeverity.Error,
      5,
    ],
    'max-len': [
      RuleConfigSeverity.Error,
      /**
       *
       * VS Code settings are available in
       * /workspace/.devcontanier/devcontainer.json file under the following
       * settings proprties:
       *
       * customizations.vscode.settings.editor.rulers
       * customizations.vscode.settings.editor.wordWrapColumn
       */
      120,
    ],
  },
}
