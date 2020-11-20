# Starter React App

[![CircleCI](https://circleci.com/gh/tomchen/starter-react-app.svg?style=shield)](https://circleci.com/gh/tomchen/starter-react-app) [![codecov](https://codecov.io/gh/tomchen/starter-react-app/branch/master/graph/badge.svg)](https://codecov.io/gh/tomchen/starter-react-app)

Starter React App with my preferred (dev)dependencies.

Preinstalled and preconfigured are (see package.json for details):

* [React](https://reactjs.org/), [Redux](https://redux.js.org/), [react-redux](https://react-redux.js.org/), [redux-thunk](https://github.com/reduxjs/redux-thunk), [Immer](https://immerjs.github.io/immer/)
* [Babel](https://babeljs.io/) and necessary presets
* [webpack](https://webpack.js.org/), its [dev server](https://webpack.js.org/configuration/dev-server/) and necessary [loaders](https://webpack.js.org/loaders/) (incl. [PostCSS](https://webpack.js.org/loaders/postcss-loader/), [Sass](https://webpack.js.org/loaders/sass-loader/) and [url (base64 URI)](https://webpack.js.org/loaders/url-loader/) loaders, [SVGR](https://react-svgr.com/))
* [Prettier](https://prettier.io/), [ESLint](https://eslint.org/) and necessary configurations (incl. [Airbnb's config](https://github.com/airbnb/javascript)) and plugins
* [Jest](https://jestjs.io/)
* [.gitignore](https://git-scm.com/docs/gitignore), [.gitattributes](https://git-scm.com/docs/gitattributes), [.editorconfig](https://editorconfig.org/), [CircleCI](https://circleci.com/) and [Codecov](https://codecov.io/) configurations

You can:

* Update all dependencies with [`npm update`](https://docs.npmjs.com/cli/v6/commands/npm-update) (latest minor releases) or [`npm-check-updates`](https://www.npmjs.com/package/npm-check-updates) (latest major releases), or use [VS Code](https://code.visualstudio.com/) plugin [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) to manually do it
* Remove dependencies you don't need and add dependencies you need in package.json, use either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) to install dependencies
