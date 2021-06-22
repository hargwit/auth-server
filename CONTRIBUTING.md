# How to contribute

## Contents

- [Git hooks](#git-hooks)
- [Depedencies](#dependencies)
- [Committing and merging](#committing-and-merging)

## Git hooks

This project uses husky for pre-commit and pre-push hooks. These will be enabled by default.

## Dependencies

You must commit both `package.json` and `package-lock.json` when altering dependencies.

## Committing and merging

The project uses [commitlint](https://commitlint.js.org/) to ensure that all commit messages meet a certain style and standard. You can find out more about conventional commits [here](https://www.conventionalcommits.org/).

When merging pull requests into the `development` branch on GitHub, use the `Squash and merge` option and make sure the squash commit message follows the style from commitlint and contains the pull request number. Use the normal `Merge pull request` for everything else including the `main` branch.
