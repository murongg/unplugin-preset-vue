import { describe, expect, it } from 'vitest'
import { isTruly, isUndefined } from '../src/utils'

describe('test utils', () => {
  it('test isTruly', () => {
    expect(isTruly(true)).toBe(true)
    expect(isTruly({})).toBe(true)
    expect(isTruly(false)).toBe(false)
  })

  it('test isUndefined', () => {
    expect(isUndefined(true)).toBe(false)
    expect(isUndefined({})).toBe(false)
    expect(isUndefined(false)).toBe(false)
    expect(isUndefined(undefined)).toBe(true)
  })
})
