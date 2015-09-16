const typescript = require("typescript")
const assign = require("object-assign")

module.exports = function (debug) {
  this.filter("typescript", (data, options) => {
    let result = typescript.transpile(data.toString(), assign({ module: typescript.ModuleKind.CommonJS }, options))

    return assign({ ext: '.js' }, { code: result })
  })
}

