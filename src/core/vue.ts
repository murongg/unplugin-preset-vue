import Vue from 'unplugin-vue'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-vue'

export function createVuePlugin(options: Options, meta: UnpluginContextMeta) {
  return ((Vue as any).default as typeof Vue).raw(options, meta)
}
