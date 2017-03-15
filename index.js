const ts = require('typescript')
const extname = require('path').extname

module.exports = function (fly) {
  fly.plugin('typescript', {every: true}, function * (file, opts) {
    const compilerOptions = Object.assign({sourceMap: false, outFile: file.base}, opts)

    // modify extension
    const ext = extname(file.base)
    file.base = file.base.replace(new RegExp(ext, 'i'), '.js')

    // compile output
    const result = ts.transpileModule(file.data.toString(), {compilerOptions})

    if (opts.sourceMap && result.sourceMapText) {
      // add sourcemap to `files` array
      this._.files.push({
        dir: file.dir,
        base: `${file.base}.map`,
        data: new Buffer(JSON.stringify(result.sourceMapText))
      })
    }

    // update file's data
    file.data = new Buffer(result.outputText)
  })
}

