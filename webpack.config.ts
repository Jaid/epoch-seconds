// import createDebug from 'debug'

// const debug = createDebug(`webpack-config-jaid`)
// class MyPlugin2 {
//   apply(compiler) {
//     compiler.hooks.afterEnvironment.tap(`MyPlugin2`, () => {
//       const config = compiler.options
//       console.dir(config)
//     })
//   }
// }
// class MyPlugin {
//   apply(compiler) {
//     compiler.hooks.afterEnvironment.tap(`MyPlugin`, () => {
//       const config = compiler.options
//       const p = new MyPlugin2
//       p.apply(compiler)
//     })
//   }
// }
const config: import("webpack").Configuration = {
  // extends: `webpack-config-jaid`,
  // stats: {
  //   loggingDebug: true,
  // },
  target: `web`,
}

export default config
