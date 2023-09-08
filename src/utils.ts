export function isTruly(val: any) {
  if (typeof val === 'boolean')
    return val
  return !!val
}

export function isUndefined(val: any): val is undefined {
  return val === undefined
}
