import { sum } from '../utils/sum'

describe('sum 関数のテスト', () => {
  it('2 + 3 は 5 であるべき', () => {
    expect(sum(2, 3)).toBe(5)
  })

  it('-1 + 1 は 0 であるべき', () => {
    expect(sum(-1, 1)).toBe(0)
  })

  it('0 + 0 は 0 であるべき', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('10 + 90 は 100 であるべき', () => {
    expect(sum(10, 90)).toBe(100)
  })
  // skipされる
  it.skip('10 + 90 は 100 であるべき', () => {
    expect(sum(10, 90)).toBe(100)
  })
})

describe('matcherの一覧', () => {

    it('toBe: 値が一致するか', () => {
      expect(sum(2, 3)).toBe(5)  // 2 + 3 が 5 であるか
      expect(sum(1, 1)).not.toBe(3)  // 1 + 1 が 3 ではないか
    })
  
    it('toEqual: 結果が一致するか', () => {
      const result = sum(4, 6)
      expect(result).toEqual(10)  // 4 + 6 が 10 であるか
    })
  
    it('toBeTruthy / toBeFalsy: 真偽値をテスト', () => {
      expect(sum(2, 3)).toBeTruthy()  // 2 + 3 が真であるか
      expect(sum(0, 0)).toBeFalsy()   // 0 + 0 が偽であるか
    })
  
    it('toBeGreaterThan: より大きい値をテスト', () => {
      expect(sum(3, 4)).toBeGreaterThan(6)  // 3 + 4 が 6 より大きいか
      expect(sum(1, 1)).not.toBeGreaterThan(2)  // 1 + 1 が 2 より大きくないか
    })
  
    it('toBeLessThan: より小さい値をテスト', () => {
      expect(sum(3, 4)).toBeLessThan(8)  // 3 + 4 が 8 より小さいか
      expect(sum(5, 5)).not.toBeLessThan(10)  // 5 + 5 が 10 より小さくないか
    })
  
    it('toContain: 配列の中に含まれているか', () => {
      const arr = [sum(2, 3), sum(4, 6), sum(1, 1)]
      expect(arr).toContain(5)  // 配列に 5 が含まれているか
      expect(arr).not.toContain(9)  // 配列に 9 が含まれていないか
    })
  
    it('toMatch: 正規表現と一致するか', () => {
      const result = sum(2, 3).toString()
      expect(result).toMatch(/^5$/)  // '5' が /^5$/ 正規表現と一致するか
      expect(result).not.toMatch(/^4$/)  // '5' が /^4$/ 正規表現と一致しないか
    })
  
    it('toHaveLength: 配列や文字列の長さを確認', () => {
      const result = sum(2, 3).toString()
      expect(result).toHaveLength(1)  // 結果の文字列 '5' の長さが 1 であるか
    })
  
    it('toHaveProperty: オブジェクトにプロパティがあるか', () => {
      const obj = { value: sum(2, 3) }
      expect(obj).toHaveProperty('value')  // オブジェクトに 'value' プロパティが存在するか
      expect(obj).toHaveProperty('value', 5)  // 'value' プロパティの値が 5 であるか
    })
  
  })