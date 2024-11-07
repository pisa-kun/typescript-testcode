import { describe, it, expect, vi } from 'vitest'
import { calcDIResult } from '../utils/calcFunctions'
import * as calc from '../utils/calc'  // calc.ts からモジュールをインポート

describe('DIのテスト', () => {
    it('addを代入してテスト', ()=> {
        const addResult = calcDIResult(calc.add, 3, 3)
        expect(addResult).toBe(36)
    })

    it('subを代入してテスト', ()=> {
        const subResult = calcDIResult(calc.sub, 3, 2)
        expect(subResult).toBe(1)
    })

    it('即席の関数を代入してテスト', ()=> {
        const crossResult = calcDIResult((a: number, b:number) => a * b, 3, 3)
        expect(crossResult).toBe(81)
    })
})