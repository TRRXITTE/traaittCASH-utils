'use strict'

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'traaittCASHUtils.js',
    library: 'traaittCASHUtils',
    libraryTarget: 'umd'
  },
  node: {
    fs: 'empty'
  },
  target: 'web'
}
