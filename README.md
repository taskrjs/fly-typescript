# fly-typescript [![][travis-badge]][travis-link]

> [Typescript](https://github.com/Microsoft/TypeScript) plugin for Fly

## Install

```a
npm install fly-typescript --save-dev
```

## Usage

```js
exports.scripts = function * (fly) {
  yield fly.source('src/**/*.ts').typescript({
    jsx: 'React',
    target: 'ES5',
    sourceMap: true,
    removeComments: true
  }).target('dist/js');
}
```

## API

### .typescript(options)

Unlike most plugins, this plugin provides access to all of Typescript's [Transpile options](https://github.com/Microsoft/TypeScript/blob/master/src/services/transpile.ts#L2-L8). However, _for the sake of simplicity_, this plugin **flattens** all `compilerOptions` keys into the same object. In other words, we **assume** that you're providing `compilerOptions`, unless the given key matches the name of another `TranspileOption`.

> Check out Typescript's [Compile Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) to see all Compiler options.

For example:

```js
fly.source('...').typescript({ 
  moduleName: 'FooBar',
  compilerOptions: {
    module: 'System',
    sourceMap: true
  }
}).target('...');

// can be written as:

fly.source('...').typescript({ 
  moduleName: 'FooBar',
  module: 'System',
  sourceMap: true
}).target('...');
```

Notice that `compilerOptions` is no longer defined, and instead, its children (`module`, `sourceMap`, etc) are defined _alongside_ `moduleName`!

> **Note:** The first example (aka, using `compilerOptions`) will still work.

## License

MIT © FlyJS

[travis-link]:  https://travis-ci.org/flyjs/fly-typescript
[travis-badge]: http://img.shields.io/travis/flyjs/fly-typescript.svg?style=flat-square
