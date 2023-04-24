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

By default, the TypeScript compiler generates ES3 code for maximum compatibility. You can generate a specific version of ECMAScript using the --target option:

```
yarn tsc --target es2015 <fileName.ts>
```

ES6 (ES2015) is supported by all modern browsers, but you should compile to the most recent version we know can be supported.

### Configuration

You can provide a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file, normally in the root folder of your project, to configure compiler options for batch processing of files. In it, you can include/exclude files and specify options.

If you run `tsc` without providing a filename, it will consult the `tsconfig.json` file and compile according to it.

Most tool sets will generate these automatically for you if you specify you are using TypeScript (e.g. create-react-app)
