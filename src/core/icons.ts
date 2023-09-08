import Icons from 'unplugin-icons'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-icons'
import { getUnpluginDefaultExportsRaw } from '../utils'

export function createIconsPlugin(options: Options, meta: UnpluginContextMeta) {
  return getUnpluginDefaultExportsRaw(Icons)(options, meta)
}
