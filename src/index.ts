import type { UnpluginFactory, UnpluginOptions } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'
import { createAutoImportPlugin } from './core/auto-import'
import { isTruly } from './utils'
import { createVueComponentsPlugin } from './core/vue-components'
import { createIconsPlugin } from './core/icons'

function getPluginOptions<T>(options: T | boolean): NonNullable<T> {
  if (isTruly(options))
    return {} as NonNullable<T>

  return options as NonNullable<T>
}

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options, meta) => {
  const plugins: UnpluginOptions[] = []
  const { autoImport, vueComponents, icons } = options || {}

  function collectionPlugins(options: UnpluginOptions | UnpluginOptions[]) {
    if (Array.isArray(options))
      options.forEach((opt) => { plugins.push(opt) })
    else
      plugins.push(options)
  }

  if (!isTruly(autoImport)) {
    const raw = createAutoImportPlugin(getPluginOptions(autoImport), meta)
    collectionPlugins(raw)
  }

  if (!isTruly(vueComponents)) {
    const raw = createVueComponentsPlugin(getPluginOptions(vueComponents), meta)
    collectionPlugins(raw)
  }

  if (!isTruly(icons)) {
    const raw = createIconsPlugin(getPluginOptions(icons), meta)
    collectionPlugins(raw)
  }

  return plugins
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
