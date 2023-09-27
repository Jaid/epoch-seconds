import type {Options as BaseOptions} from './ConfigBuilder.js'
import type {Options as TsLoaderOptions} from 'ts-loader'

import {ConfigBuilder} from './ConfigBuilder.js'
import {OutputConfigPlugin} from './index.js'
import {TsconfigPathsPlugin} from 'tsconfig-paths-webpack-plugin'

export type Options = BaseOptions & {}

export class CommonConfigBuilder extends ConfigBuilder {
  #tsLoaderOptions: Partial<TsLoaderOptions> = {
    onlyCompileBundledFiles: true,
  }
  constructor(options: Partial<Options> = {}) {
    super(options)
    if (this.isDevelopment) {
      this.#tsLoaderOptions.transpileOnly = true
    } else {
      this.#tsLoaderOptions.compilerOptions = {
        declaration: true,
        declarationDir: this.fromOutputFolder(`types`),
        declarationMap: true,
      }
    }
  }
  async build() {
    this.set(`mode`, this.mode)
    this.set(`target`, `web`)
    this.set(`experiments.futureDefaults`, true)
    this.addExtension(`ts`)
    this.addPlugin(OutputConfigPlugin)
    this.addRule(`ts`, {
      loader: `ts-loader`,
      options: this.#tsLoaderOptions,
    })
    this.addResolvePlugin(TsconfigPathsPlugin)
    return super.build()
  }
  async buildDevelopment() {
    this.set(`devtool`, `inline-source-map`)
  }
  async buildProduction() {
    this.set(`devtool`, `source-map`)
    this.set(`optimization.minimize`, false)
  }
  makeOptions(options: Partial<Options>): Options {
    const baseOptions = super.makeOptions(options)
    const defaultOptions: Partial<Options> = {}
    if (options.outputFolder === undefined) {
      const mode = baseOptions.env === `production` ? `production` : `development`
      defaultOptions.outputFolder = `out/package/${mode}`
    }
    return Object.assign({}, baseOptions, defaultOptions)
  }
}
