const { watch } = require('chokidar')

const build = require('./build')

const watcher = watch([
  'src/**/*'
])

build()

watcher.on('change', () => build())
