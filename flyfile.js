var x = module.exports

x.build = function *() {
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
