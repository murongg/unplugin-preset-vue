import type { Options as AutoImportOptions } from 'unplugin-auto-import/types'
import type { Options as VueComponentsOptions } from 'unplugin-vue-components'
import type { Options as IconsOptions } from 'unplugin-icons'

export interface Options {
  autoImport?: boolean | AutoImportOptions
  vueComponents?: boolean | VueComponentsOptions
  icons?: boolean | IconsOptions
}
