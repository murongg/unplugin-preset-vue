import Components from 'unplugin-vue-components'
import type { Options } from 'unplugin-vue-components'
import type { UnpluginContextMeta } from 'unplugin'

const DEFAULT_OPTIONS: Options = {
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  dts: 'src/components.d.ts',
}

export function createVueComponentsPlugin(options: Options = DEFAULT_OPTIONS, meta: UnpluginContextMeta) {
  return ((Components as any).default as typeof Components).raw(Object.assign({}, options, DEFAULT_OPTIONS), meta)
}
