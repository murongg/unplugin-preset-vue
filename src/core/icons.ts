import Icons from 'unplugin-icons/index'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-icons'

export function createIconsPlugin(options: Options, meta: UnpluginContextMeta) {
  return Icons.raw(options, meta)
}
