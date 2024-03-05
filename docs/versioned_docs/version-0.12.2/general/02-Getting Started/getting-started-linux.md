---
sidebar_position: 5
pagination_next: general/Getting Started/write-your-first-instruction
---

# Install AskUI Linux

## Requirements

- [Node.js](https://nodejs.org/) version 16 or above
- __npm__ in version 7.10 or above (usually comes with the Node.js installation)
- A text editor/IDE like [Visual Studio Code](https://code.visualstudio.com/)
- :warning: [Information for Wayland](../07-Troubleshooting/linux.md#wayland).

## Installation

Open a directory where you would like to place the AskUI setup. If you haven’t already, set up an NPM project by running:

```shell
npm init -y
```

This will create a `package.json` file inside your present working directory which contains the configuration of your project including a description of its dependencies.

Install `askui` and other dependencies for writing and executing tests:

```shell
npm i --save-dev askui @askui/askui-reporters @askui/jest-allure-circus typescript ts-node @types/jest ts-jest jest
```

<details>
  <summary>Quick explanation of all the dependencies</summary>

- [askui](https://www.npmjs.com/package/askui): Controlling a multitude of operating systems with commands based on automatically detected screen elements etc.
- [@askui/askui-reporters](https://www.npmjs.com/package/askui-reporters): AskUI reporters for nice looking reports.
- [typescript](https://www.npmjs.com/package/typescript): Allowing you to write your tests in [TypeScript](https://www.typescriptlang.org/) instead of JavaScript
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution and REPL for node.js, with source map and native ESM support.
- [jest](https://www.npmjs.com/package/jest): Allowing you to write and run tests (`describe`, `it`, assertions, mocking etc.)
- [ts-jest](https://www.npmjs.com/package/ts-jest): A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript
- [@types/jest](https://www.npmjs.com/package/@types/jest): Types for Jest

</details>

:::note

To create and serve a static HTML-Report you have to install [Allure](https://github.com/allure-framework/allure2#download) and then call `allure serve ./allure-results` from your root-directory.

:::

## Access Token

As we need to prevent misuse of our API, we need you to create some credentials through our __AskUI Studio__ (while still free) and [configure our library to use these credentials](../../api/Configuration/askui-ui-control-client#credentials) for authenticating and authorizing with our API.

Please [fill out this form](https://www.askui.com/demo) to schedule a demonstration or request a trial to obtain access to __AskUI Studio__.
