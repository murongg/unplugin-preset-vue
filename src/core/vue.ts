import Vue from 'unplugin-vue'
import type { UnpluginContextMeta } from 'unplugin'
import type { Options } from 'unplugin-vue'
import { getUnpluginDefaultExportsRaw } from '../utils'

export function createVuePlugin(options: Options, meta: UnpluginContextMeta) {
  return getUnpluginDefaultExportsRaw(Vue)(options, meta)
}
