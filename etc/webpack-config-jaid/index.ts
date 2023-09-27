import type {Options as BaseOptions, ConfigBuilder} from './ConfigBuilder.js'
import type {Compiler, WebpackPluginInstance} from 'webpack'

import {CommonConfigBuilder} from './CommonConfigBuilder.js'

export class OutputConfigPlugin implements WebpackPluginInstance {
  apply(compiler: Compiler) {
    compiler.hooks.beforeCompile.tap(`OutputConfigPlugin`, () => {
      console.dir(compiler.options)
    })
  }
}

const buildConfig = async () => {
  const configBuilder = new CommonConfigBuilder
  const webpackConfig = await configBuilder.build()
  console.dir(configBuilder)
  return webpackConfig
}

export default buildConfig
export {buildConfig, ConfigBuilder}
