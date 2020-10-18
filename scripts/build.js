const { startService } = require('esbuild')

module.exports = async (option = {}) => {
  const {
    color = true,
    entryPoints = [
      './src/index.jsx'
    ],
    outfile = './build/bundle.js',
    bundle = true,
    sourcemap = false,
    platform = 'node',
    logLevel = 'error'
  } = option

  // NOTE: Start build service;
  const service = await startService()

  try {
    const startTime = Date.now()

    await service.build({
      color,
      entryPoints,
      outfile,
      bundle,
      sourcemap,
      platform,
      logLevel
    })

    console.log(`Built in ${Date.now() - startTime}ms`)
  } catch (error) {
    console.error('Unexpected error occured while building...')
  } finally {
    service.stop()
  }
}
