var x = module.exports

x.default = function * () {
  yield this.watch('test/src/app.ts', 'build')
}

x.build = function *() {
  yield this.clear('test/app.js')
  yield this
    .source('test/src/app.ts')
    .typescript({
      removeComments: true,
      preserveConstEnums: true,
      experimentalDecorators: true
    })
    .target("test")
}
