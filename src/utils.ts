import type { UnpluginInstance } from 'unplugin'

export function isTruly(val: any) {
  if (typeof val === 'boolean')
    return val
  return !!val
}

export function isUndefined(val: any): val is undefined {
  return val === undefined
}

export function getUnpluginDefaultExportsRaw<T extends UnpluginInstance<any, any>>(module: T) {
  if (module.raw)
    return module.raw
  return ((module as any).default as typeof module).raw
}
