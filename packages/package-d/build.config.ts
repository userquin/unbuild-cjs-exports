import { defineBuildConfig } from 'unbuild'
import { fixCJSExportTypePlugin } from '../../scripts/cjs-plugin'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: true
    }
  },
  externals: ['package-b'],
  hooks: {
    'rollup:dts:options': (ctx, options) => {
      options.plugins.push(fixCJSExportTypePlugin(ctx))
    },
  },
})
