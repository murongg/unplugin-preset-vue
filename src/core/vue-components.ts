import Components from 'unplugin-vue-components'
import type { Options } from 'unplugin-vue-components'
import type { UnpluginContextMeta } from 'unplugin'
import { getUnpluginDefaultExportsRaw } from '../utils'

const DEFAULT_OPTIONS: Options = {
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  dts: 'src/components.d.ts',
}

export function createVueComponentsPlugin(options: Options = DEFAULT_OPTIONS, meta: UnpluginContextMeta) {
  return getUnpluginDefaultExportsRaw(Components)(Object.assign({}, options, DEFAULT_OPTIONS), meta)
}
