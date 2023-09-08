import AutoImport from 'unplugin-auto-import/index'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-auto-import/types'

const DEFAULT_OPTIONS: Options = {
  imports: [
    'vue',
    'vue-router',
    '@vueuse/core',
  ],
  dts: 'src/auto-imports.d.ts',
  vueTemplate: true,
}

export function createAutoImportPlugin(options: Options = DEFAULT_OPTIONS, meta: UnpluginContextMeta) {
  return AutoImport.raw(options, meta)
}
