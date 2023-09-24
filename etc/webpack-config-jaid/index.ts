import {ConfigBuilder} from './ConfigBuilder.js'

const buildConfig = async () => {
  const configBuilder = new ConfigBuilder
  configBuilder.set(`target`, `web`)
  configBuilder.set(`experiments.futureDefaults`, true)
  configBuilder.addExtension(`ts`)
  configBuilder.addRule(`ts`, {
    loader: `ts-loader`,
    options: {
      onlyCompileBundledFiles: true,
      transpileOnly: true,
    },
  })
  return configBuilder.config
}

export default buildConfig
export {buildConfig, ConfigBuilder}
