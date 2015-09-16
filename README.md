<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
  </a>
</div>

> [typescript](https://github.com/Microsoft/TypeScript) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](https://github.com/Microsoft/TypeScript) to see the available options.

### Install

```a
npm install -D fly-typescript
```

### Example

Check [flyfile.js](https://github.com/kashiro/fly-typescript/blob/master/flyfile.js) and [test](https://github.com/iiegor/fly-typescript/blob/master/test) directory :)

```js
export default function* () {
  yield this.clear("test/app.js")
  yield this
    .source("test/src/app.ts")
    .typescript({
      removeComments: true,
      preserveConstEnums: true,
      experimentalDecorators: true
    })
    .target("test")
}
```

# License

[MIT][mit] © Iegor Azuaga


[mit]:          http://opensource.org/licenses/MIT
[contributors]: https://github.com/iiegor/fly-typescript/graphs/contributors
[releases]:     https://github.com/iiegor/fly-typescript/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-typescript
[npm-ver-link]: https://img.shields.io/npm/v/fly-typescript.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-typescript.svg?style=flat-square
