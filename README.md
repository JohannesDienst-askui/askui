![askui logo](./docs/static/img/askui-logo-white.svg.svg#gh-dark-mode-only)
![askui logo](./docs/static/img/askui-logo.svg#gh-light-mode-only)

*Reliable, automated end-to-end-automation that only depends on what is shown on your screen instead of the technology or platform you are running on*

<br/>

<center> <h1> What Can Be Said Can Be Solved </h1> </center>


## Disclaimer

This repo is contains the AskUI SDK (ADK) written in TypeScript. Releases are done from the root repository. This may change in the future as we plan to include also packages, libraries etc. written in other languages in this repo to make the power of AskUI available to non-typescript/-javascript developers as well.

## Installation
Run an `npm install` inside the root directory if you want to create a new release.

```sh
$ npm install
```

Run `npm install` inside `packages/askui-nodejs` to build the TypeScript ADK.

## Contributing

### Branching

Your branch name should conform to the format `<issue id>-<issue title lower-cased and kebab-cased>`, e.g., let's say you have an issue named *Hello World* with id *AS-101*, the the branch name would be `AS-101-hello-world`. We use the issue id prefix to prepend a link to the issue to the commit message header. In some cases, when doing a quick fix of a typo etc. when there is no issue, feel free to just use a descriptive name of what you are doing, e.g., `fix-typo-in-example-readme`.

### Commit Message Standard

Commit messages should conform to [Conventional Commits Message Standard](https://www.conventionalcommits.org/en/v1.0.0/). Exceptions to this rule may be merge commits.

### Adding Dependencies

The [one version rule](https://opensource.google/documentation/reference/thirdparty/oneversion#:~:text=There%20may%20only%20be%20one,several%20reasons%20for%20this%20restriction.) should be followed as much as possible. In practice, this mean checking if a dependency to be added is already used by another package or meant to be used by multiple packages.

### Githooks

This monorepo uses [githooks](https://git-scm.com/docs/githooks) with [husky](https://github.com/typicode/husky) to lint and test the code, to help you stick to the commit message standard by opening up a cli for constructing the commit message on each commit, prepending the commit message with the issue number or linting the commit message etc. In some cases, e.g., when using a Git client such as [Git Tower](https://www.git-tower.com/) or [GitKraken](https://www.gitkraken.com/), cherry-picking, rebasing or in a ci pipeline, you may want to disable githooks, especially the interactive cli.

For skipping the interactive cli when commiting, set the environment variable `SKIP_CZ_CLI` to `true`.
```sh
$ export SKIP_CZ_CLI=true
```

For skipping all githooks, set the environment variable `HUSKY` to `0`.
```sh
$ export HUSKY=0
```

In a ci pipeline, the githooks are skipped by default.
