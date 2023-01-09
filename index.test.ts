import {describe, it, expect} from 'vitest'
import { testFunc1 } from './index'


describe('index', () => {
  expect(testFunc1(1, 2)).toBe(3)
  expect(1).toBe(1)
})