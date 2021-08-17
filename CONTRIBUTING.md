# How to contribute

## Contents

- [Installation](#installation)
- [Commands](#commands)
- [Debugging](#debugging)
- [Git hooks](#git-hooks)
- [Depedencies](#dependencies)
- [Committing and merging](#committing-and-merging)

## Installation

Run `npm install` to install all dependencies.

## Commands

- `npm run dev` to start the local development server.
- `npm run build` to build the production app.
- `npm start` to start the production server.
- `npm run lint` to run all linters.
- `npm run format` to format all applicable files.
- `npm test-int` to run all integration tests (requires running system).
- `npm test-unit` to run all unit tests.

## Debugging

The project can be run with the vscode debugger using the following `.vscode/launch.json` file configuration:

```json
{
 "version": "0.2.0",
 "configurations": [
  {
   "type": "node",
   "request": "launch",
   "name": "Launch Program",
   "program": "${workspaceFolder}/dist/index.js",
   "preLaunchTask": "tsc: build - tsconfig.json",
   "sourceMaps": true,
   "trace": "all",
   "outFiles": ["${workspaceFolder}/dist/**/*.js"]
  }
 ]
}
```

This configuration will call typescript to build the project before debugging with node.

## Git hooks

This project uses husky for pre-commit and pre-push hooks. These will be enabled by default.

## Dependencies

You must commit both `package.json` and `package-lock.json` when altering dependencies.

## Committing and merging

The project uses [commitlint](https://commitlint.js.org/) to ensure that all commit messages meet a certain style and
standard. You can find out more about conventional commits [here](https://www.conventionalcommits.org/).

When merging pull requests into the `development` branch on GitHub, use the `Squash and merge` option and make sure the
squash commit message follows the style from commitlint and contains the pull request number. Use the normal
`Merge pull request` for everything else including the `main` branch.
