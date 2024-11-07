import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest'
import { addUser, getUser, getAllUsers, clearUsers } from '../utils/user'

describe('ユーザー管理関数のテスト', () => {
  // グローバルな準備を行う（テスト全体に対して一度だけ実行）
  beforeAll(() => {
    console.log('テスト全体の前準備 (beforeAll)')
  })

  // テスト後の後処理を行う（テスト全体が終わった後に一度だけ実行）
  afterAll(() => {
    console.log('テスト全体の後処理 (afterAll)')
  })

  // 各テスト前に実行（個々のテストが実行される前に毎回実行）
  beforeEach(() => {
    console.log('個々のテスト前の準備 (beforeEach)')
    clearUsers()  // 各テスト前にユーザーをクリア
  })

  // 各テスト後に実行（個々のテストが実行された後に毎回実行）
  afterEach(() => {
    console.log('個々のテスト後の後処理 (afterEach)')
  })

  it('ユーザーが追加できるか', () => {
    const user = addUser('Sumika')
    expect(user).toEqual({ id: 1, name: 'Sumika' })
  })

  it('ユーザーが取得できるか', () => {
    addUser('Liliya')
    const user = getUser(1)  // 1 番目のユーザーを取得
    expect(user).toEqual({ id: 1, name: 'Liliya' })
  })

  it('全てのユーザーを取得できるか', () => {
    addUser('Saki')
    addUser('Ume')
    const users = getAllUsers()
    expect(users).toHaveLength(2)
    expect(users).toEqual([
      { id: 1, name: 'Saki' },
      { id: 2, name: 'Ume' }
    ])
  })

  it('ユーザー情報がリセットされるか', () => {
    addUser('Sena')
    clearUsers()  // ユーザー情報をリセット
    const users = getAllUsers()
    expect(users).toHaveLength(0)  // ユーザーはリセットされているはず
  })
})