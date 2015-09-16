const typescript = require("typescript").transpile
const assign = require("object-assign")

module.exports = function (debug) {
  this.filter("typescript", (data, options) => {
    return this.defer(typescript)(
      assign({ data: data.toString() }, options)
    ).then((result) => assign({ ext: ".js" }, result))
  })
}

