export function isTruly(val: any) {
  if (typeof val === 'boolean')
    return val
  return false
}

export function isUndefined(val: any): val is undefined {
  return val === undefined
}
