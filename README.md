# typescript-olsen

A repository to store my learning and code from Andy Olsen's TypeScript in 4 Hours course on O'Reilly

## Installation

- Clone the repo according to [GitHub's Instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

- Install dependencies using [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://docs.npmjs.com/)

## Usage

TypeScript files cannot be run directly, they must first be transpiled into JavaScript:

```
yarn tsc <fileName.ts>
```

Then run the emitted JavaScript file:

```
node <fileName.js>
```
