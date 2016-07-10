# dir2 [![NPM version](https://img.shields.io/npm/v/dir2.svg)](https://npmjs.com/package/dir2) [![NPM downloads](https://img.shields.io/npm/dm/dir2.svg)](https://npmjs.com/package/dir2) [![Build Status](https://img.shields.io/circleci/project/egoist/dir2/master.svg)](https://circleci.com/gh/egoist/dir2)

> Get all directories within a directory.

## Install

```bash
$ npm install --save dir2
```

## Usage

```js
const dir2 = require('dir2')

// async
dir2('.')
  .then(dirs => {
    console.log(dirs)
    // => ['.git', 'node_modules']
  })

// sync
dir2.sync('.')
```

## API

### dir2(sourceDirectory, [options])

#### sourceDirectory

Type: `string`<br>
Required: `true`

The directory to look into.

#### options

##### prefix

Type: `Boolean`<br>
Default: `false`

Prefixing source path to returned directory name. Like `.git` => `/source/path/.git`.

## License

MIT © [EGOIST](https://github.com/egoist)
