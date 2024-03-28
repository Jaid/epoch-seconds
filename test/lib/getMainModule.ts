import {pathToFileURL} from 'node:url'

export const getMainModule = async <T>() => {
  const importPath = process.env.MAIN_MODULE ? pathToFileURL(process.env.MAIN_MODULE).toString() : process.env.npm_package_name
  if (!importPath) {
    throw new Error(`Cannot find main module path, searched in env vars “MAIN_MODULE” and “npm_package_name”`)
  }
  console.log(`Testing: ${importPath}`)
  const mainModule = await import(importPath) as T
  return mainModule
}
export const getMainModuleDefault = async <T extends {default: unknown}>() => {
  const mainModule = await getMainModule<T>()
  return mainModule.default as T['default']
}
