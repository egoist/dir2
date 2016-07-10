'use strict'
const fs = require('fs')
const path = require('path')
const pify = require('pify')

module.exports = function async(dir) {
  if (!dir) {
    return Promise.reject(new Error('A source directory is needed.'))
  }
  const read = pify(fs.readdir)
  const stat = pify(fs.stat)
  return read(dir)
    .then(files => files.map(file => path.join(dir, file)))
    .then(files => {
      return Promise.all(files.map(file => isDir(file)))
    })
    .then(files => files.filter(file => Boolean(file)))

  function isDir(file) {
    return stat(file).then(stats => {
      if (stats.isDirectory()) {
        return file
      }
      return false
    })
  }
}

module.exports.sync = function sync(dir) {
  return fs.readdirSync(dir).filter(file => {
    return fs.statSync(path.join(dir, file)).isDirectory()
  })
}
