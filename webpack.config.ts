import {buildConfig} from 'webpack-config-jaid'

const getConfig = async () => {
  const config = await buildConfig()
  console.dir(config)
  return config
}
export default getConfig
