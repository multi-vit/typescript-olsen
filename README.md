# typescript-olsen

A repository to store my learning and code from Andy Olsen's `TypeScript in 4 Hours` live event on O'Reilly

## Installation

- Clone the repo according to [GitHub's Instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

- Install dependencies using [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://docs.npmjs.com/)

Alternatively, use a free online TypeScript compiler such as [this one](http://www.typescriptlang.org/play/).

## Usage

TypeScript files cannot be read at runtime, they must first be transpiled into JavaScript:

```bash
yarn tsc <fileName.ts>
```

**N.B.** You don't need the `yarn` command if you used npm or installed TypeScript globally

This creates a JavaScript file with the same name, which you can then run:

```bash
node <fileName.js>
```

By default, the TypeScript compiler generates ES3 code for maximum compatibility. You can generate a specific version of ECMAScript using the --target option:

```bash
yarn tsc --target es2015 <fileName.ts>
```

ES6 (ES2015) is supported by all modern browsers, but you should compile to the most recent version we know can be supported.

By default, TypeScript will emit a JavaScript file even if there are errors. You can change this by using the --noEmitOnError flag:

```bash
tsc —noEmitOnError <fileName.ts>
```

## Configuration

You can provide a [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) file, normally in the root folder of your project, to configure compiler options for batch processing of files. In it, you can include/exclude files and specify options.

If you run `tsc` without providing a filename, it will consult the `tsconfig.json` file and compile according to it.

Most tool sets will generate these automatically for you if you specify you are using TypeScript (e.g. create-react-app)

### Migrating to TypeScript from JavaScript

The TypeScript compiler allows you compile existing JavaScript code. The absence of type information isn't a problem, but the compiler won't do any type checking for you. However, it will pick up on bad function calls so it's still a good place to start. You can then begin to add types.

### TypeScript Basic Types

- number - a floating point or whole number
- bigint - a big integer, via BigInt(xxxx)
- boolean - true or false
- string - literal text of template string `${x}`
- symbol - a symbol, via Symbol(‘nnnn’) - a symbol is like a string but each is unique (comparison **always** equate to be not equal, so symbolOne !== symbolTwo)
- function - a function
- object - any non-primitive type (e.g. object, array)
- void - no type (e.g. function with no return)
- never - function that never returns normally (always throws an exception)
- null - data type of null value
- undefined - data type of undefined value
- any - disables type-checks, e.g. in legacy code

### Defining Types and Type Inference

Use the syntax `<variableName>: <type>`:

```typescript
let name: string = “Andy”;
```

TypeScript can do [type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html) for you, and you should use this wherever possible to increase readability. Type inference is where TypeScript can tell the type of a variable by looking at what is in it:

```typescript
let name = “Andy”;
```

Both of the above will compile to the same JavaScript code.

But type inference doesn’t happen if you are only declaring the variable without initialising it:

```typescript
let name; // No type inferred
```
