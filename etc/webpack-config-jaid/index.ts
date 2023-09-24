import {ConfigBuilder} from './ConfigBuilder.js'

const buildConfig = async () => {
  const configBuilder = new ConfigBuilder
  await configBuilder.run()
  return configBuilder.config
}

export default buildConfig
export {buildConfig, ConfigBuilder}
