// import { describe, it, expect, vi } from 'vitest'
import { vi } from 'vitest'
import { calcResult } from '../utils/calcFunctions'
import * as calc from '../utils/calc'  // calc.ts からモジュールをインポート

describe('calcFunctions モジュールのテスト (モックを使用)', () => {

    it('calcResultの動作確認', () => {
        const result = calcResult(5,5)
        expect(result).toBe(10)
    })

    it('calcResultがaddとsubを使って計算を行うことを確認', () => {
      // add と sub をモック
      // calcResultの中で依存している関数を外からモックできる
      const addMock = vi.spyOn(calc, 'add')
      const subMock = vi.spyOn(calc, 'sub')
  
      // モックの戻り値を指定
      addMock.mockReturnValue(10)  // add(5, 5) は 10 を返す
      subMock.mockReturnValue(2)   // sub(5, 3) は 2 を返す
  
      // calcResult を実行
      const result = calcResult(5, 5)
  
      // calcResult は add と sub を利用しているので、期待される結果は add と sub のモックの戻り値を足し合わせたもの
      expect(result).toBe(12)  // 10 + 2 の結果
  
      // モックが呼ばれたか確認
      expect(addMock).toHaveBeenCalledWith(5, 5)  // add(5, 5) が呼ばれたか
      expect(subMock).toHaveBeenCalledWith(5, 5)  // sub(5, 5) が呼ばれたか
    })
  
    it('addMock と subMock の戻り値を変更する', () => {
      const addMock = vi.spyOn(calc, 'add')
      const subMock = vi.spyOn(calc, 'sub')
  
      // モックの戻り値を変更
      addMock.mockReturnValue(100)
      subMock.mockReturnValue(50)
  
      const result = calcResult(10, 20)
      expect(result).toBe(150)  // 100 + 50 = 150
    })
  
})