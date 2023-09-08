import Icons from 'unplugin-icons'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-icons'

export function createIconsPlugin(options: Options, meta: UnpluginContextMeta) {
  return ((Icons as any).default as typeof Icons).raw(options, meta)
}
