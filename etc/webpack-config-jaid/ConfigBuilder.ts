import * as lodash from 'lodash-es'

class ConfigBuilder {
  config: import("webpack").Configuration = {}
  constructor(protected options = {}) {}
  addExtension(extension: string) {
    this.appendUnique(`resolve.extensions`, `.${extension}`)
  }
  addRule(regex: RegExp | string, ...loaders) {
    const ruleTest = regex instanceof RegExp ? regex : new RegExp(`\\.${regex}$`)
    this.append(`module.rules`, {
      test: ruleTest,
      use: loaders,
    })
  }
  append(key: string, value) {
    const array = <unknown[] | undefined> this.get(key)
    if (!Array.isArray(array)) {
      this.set(key, [value])
      return
    }
    array.push(value)
  }
  appendUnique(key: string, value) {
    const array = <unknown[] | undefined> this.get(key)
    if (!Array.isArray(array)) {
      this.set(key, [value])
      return
    }
    if (!array.includes(value)) {
      array.push(value)
    }
  }
  get(key) {
    return <unknown> lodash.get(this.config, key)
  }
  async run() {
    this.set(`target`, `web`)
    this.set(`experiments.futureDefaults`, true)
    this.addExtension(`ts`)
    this.addRule(`ts`, {
      loader: `ts-loader`,
      options: {
        onlyCompileBundledFiles: true,
        transpileOnly: true,
      },
    })
  }
  set(key: string, value) {
    lodash.set(this.config, key, value)
  }
  setDefault(key: string, value) {
    if (lodash.get(this.config, key) === undefined) {
      lodash.set(this.config, key, value)
    }
  }
}

export {ConfigBuilder}
