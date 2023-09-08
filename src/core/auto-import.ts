// @ts-expect-error unread module
import AutoImport from 'unplugin-auto-import'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-auto-import/types'
import { getUnpluginDefaultExportsRaw } from '../utils'

const DEFAULT_OPTIONS: Options = {
  imports: [
    'vue',
  ],
  dts: 'src/auto-imports.d.ts',
  vueTemplate: true,
}

export function createAutoImportPlugin(options: Options = DEFAULT_OPTIONS, meta: UnpluginContextMeta) {
  return getUnpluginDefaultExportsRaw(AutoImport)(Object.assign({}, options, DEFAULT_OPTIONS), meta)
}
