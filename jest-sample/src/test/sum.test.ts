import { sum } from '../utils/sum'

describe('sum関数のテスト', () => {
  it('2 + 3 は 5 であるべき', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('-1 + 1 は 0 であるべき', () => {
    expect(sum(-1, 1)).toBe(0)
  })

  it('0 + 0 は 0 であるべき', () => {
    expect(sum(0, 0)).toBe(0)
  })
})