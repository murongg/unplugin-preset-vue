import type { UnpluginFactory, UnpluginOptions } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { createAutoImportPlugin } from './core/auto-import'
import { isTruly, isUndefined } from './utils'
import { createIconsPlugin } from './core/icons'
import { createVuePlugin } from './core/vue'
import { createVueComponentsPlugin } from './core/vue-components'

function getPluginOptions<T>(options: T | boolean): NonNullable<T> {
  if (isTruly(options))
    return {} as NonNullable<T>

  return options as NonNullable<T>
}

function isRegisterPlugin(val: any) {
  return isTruly(val) || isUndefined(val)
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options, meta) => {
  const plugins: UnpluginOptions[] = []
  const { vue, autoImport, vueComponents, icons } = options || {}

  function collectionPlugins(options: UnpluginOptions | UnpluginOptions[]) {
    if (Array.isArray(options))
      options.forEach((opt) => { plugins.push(opt) })
    else
      plugins.push(options)
  }

  if (isRegisterPlugin(vue)) {
    const raw = createVuePlugin(getPluginOptions(vue), meta)
    collectionPlugins(raw)
  }

  if (isRegisterPlugin(autoImport)) {
    const raw = createAutoImportPlugin(getPluginOptions(autoImport), meta)
    collectionPlugins(raw)
  }

  if (isRegisterPlugin(vueComponents)) {
    const raw = createVueComponentsPlugin(getPluginOptions(vueComponents), meta)
    collectionPlugins(raw)
  }

  if (isRegisterPlugin(icons)) {
    const raw = createIconsPlugin(getPluginOptions(icons), meta)
    collectionPlugins(raw)
  }

  return plugins
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
