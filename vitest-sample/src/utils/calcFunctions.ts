import { add, sub } from './calc'

// 2つの計算を行って、その結果を返す関数
export const calcResult = (a: number, b: number): number => {
  const sum = add(a, b)  // 足し算
  const diff = sub(a, b) // 引き算
  return sum + diff
}