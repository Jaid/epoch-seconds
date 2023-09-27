import type {Configuration, RuleSetCondition, RuleSetUse} from 'webpack'

import path from 'node:path'

import * as lodash from 'lodash-es'

export type Key = string
export type Env = "development" | "production"
export type Options = {
  contextFolder: string
  env: Env
  outputFolder: string
}
type TesterInput = RegExp | string | string[]

const compileTester = (testerInput: TesterInput): RuleSetCondition => {
  if (testerInput instanceof RegExp) {
    return testerInput
  }
  if (Array.isArray(testerInput)) {
    const insertion = testerInput.join(`|`)
    return new RegExp(`\\.(${insertion})$`)
  }
  return new RegExp(`\\.${testerInput}$`)
}
export class ConfigBuilder {
  protected config: Configuration = {}
  protected contextFolder: string
  protected mode: "none" | Env
  protected options: Options
  protected outputFolder: string
  #isProduction: boolean
  constructor(options: Partial<Options> = {}) {
    this.options = this.makeOptions(options)
    this.#isProduction = this.options.env === `production`
    this.mode = this.#isProduction ? `production` : `development`
    this.outputFolder = path.resolve(this.options.outputFolder)
    this.contextFolder = path.resolve(this.options.contextFolder)
  }
  get isDevelopment() {
    return !this.#isProduction
  }
  get isProduction() {
    return this.#isProduction
  }
  get webpackConfig() {
    return this.config
  }
  addExtension(extension: string) {
    this.appendUnique(`resolve.extensions`, `.${extension}`)
  }
  addPlugin(plugin: unknown) {
    this.append(`plugins`, plugin)
  }
  addRule(testerInput: TesterInput, ...loaders: RuleSetUse[]) {
    this.append(`module.rules`, {
      test: compileTester(testerInput),
      use: loaders,
    })
  }
  append(key: Key, value: unknown) {
    const array = this.getEnsuredArray(key)
    array.push(value)
  }
  appendUnique(key: Key, value: unknown) {
    const array = this.getEnsuredArray(key)
    if (!array.includes(value)) {
      array.push(value)
    }
  }
  async build() {
    if (this.isDevelopment) {
      await this.buildDevelopment()
    } else {
      await this.buildProduction()
    }
    this.setDefault(`mode`, this.mode)
    this.setDefault(`target`, `web`)
    this.setDefault(`output.path`, this.outputFolder)
    return this.config
  }
  async buildDevelopment() {}
  async buildProduction() {}
  fromContextFolder(...pathSegments: string[]) {
    return path.join(this.contextFolder, ...pathSegments)
  }
  fromOutputFolder(...pathSegments: string[]) {
    return path.join(this.outputFolder, ...pathSegments)
  }
  get(key: Key) {
    return <unknown> lodash.get(this.config, key)
  }
  getEnsuredArray(key: Key) {
    const array = <unknown[] | undefined> this.get(key)
    if (Array.isArray(array)) {
      return array
    }
    const value = []
    this.set(key, value)
    return value
  }
  has(key: Key) {
    return lodash.has(this.config, key)
  }
  makeOptions(options: Partial<Options>): Options {
    return Object.assign({}, options, {
      contextFolder: `.`,
      env: process.env.NODE_ENV ?? `development`,
      outputFolder: `out/package`,
    })
  }
  prepend(key: Key, value: unknown) {
    const array = this.getEnsuredArray(key)
    array.unshift(value)
  }
  prependUnique(key: Key, value: unknown) {
    const array = this.getEnsuredArray(key)
    if (!array.includes(value)) {
      array.unshift(value)
    }
  }
  set(key: Key, value) {
    lodash.set(this.config, key, value)
  }
  setDefault(key: Key, value: unknown) {
    if (!this.has(key)) {
      this.set(key, value)
    }
  }
}
