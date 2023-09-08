import Vue from 'unplugin-vue/index'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-vue'

export function createVuePlugin(options: Options, meta: UnpluginContextMeta) {
  return Vue.raw(options, meta)
}
