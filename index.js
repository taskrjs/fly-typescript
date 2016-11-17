const typescript = require("typescript")
const assign = require("object-assign")

module.exports = function () {
  return this.filter("typescript", function (data, options) {
    var result = typescript.transpile(data.toString(), assign({ module: typescript.ModuleKind.CommonJS }, options))

    return assign({ ext: '.js' }, { code: result })
  })
}

