# typescriptでテストコード作る

jestとvitestの環境構築と簡単なテストコードを作成する。

## jestの作成
### Nextjsアプリの作成

```bash
# Next.js のプロジェクトを作成
npx create-next-app@latest my-nextjs-app --typescript
cd my-nextjs-app
```

### Jestのインストールと設定

```bash
# 必要なパッケージのインストール
pnpm install --save-dev jest @types/jest ts-jest @testing-library/react @testing-library/jest-dom
```

Jest を TypeScript で動かすために ts-jest を使います。次に、Jest の設定ファイルを作成します。

```bash
# Jest 設定ファイルを作成
npx ts-jest config:init
```

### 簡単な関数 sum の作成

```bash
# utils フォルダを作成
mkdir src/utils

# sum.ts ファイルを作成
touch src/utils/sum.ts
```
sum.ts の中身を以下のようにします。

```ts
// src/utils/sum.ts

export function sum(a: number, b: number): number {
  return a + b
}
```

### テストコードの作成

```bash
# test フォルダを作成
mkdir src/tests

# sum.test.ts ファイルを作成
touch src/tests/sum.test.ts
```

```ts
// src/tests/sum.test.ts

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
```

### テストの実行
package.jsonにjestのコマンドを追加します。
```json
// package.json
{
  "name": "jest-sample",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "test": "jest"
  },
```

ルートディレクトリで下記を実行します。
```bash
# テストを実行
pnpm run test
```

## vitestの作成
### vitestのインストールと設定
```bash
# Next.js プロジェクトを作成
npx create-next-app@latest vitest-sample --typescript
cd vitest-sample

```
### vitestと関連パッケージのインストール
```bash
pnpm install --save-dev vitest @testing-library/react @testing-library/jest-dom jsdom @types/jest vite
```

### vitestの設定
次に、Vite の設定ファイルを作成し、Vitest のテスト設定を追加します。

プロジェクトのルートに vite.config.ts を作成します。
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { defineConfig as defineVitestConfig } from 'vitest/config'

// Vite の設定
export default defineConfig({
  test: {
    globals: true,         // グローバル変数 (expect など) を使用するため
    environment: 'jsdom',  // React コンポーネントのテストには jsdom 環境が必要
    coverage: {
      provider: 'istanbul', // カバレッジツールをインストール
    },
  },
})
```

### テストの実行
package.jsonにjestのコマンドを追加します。
```json
// package.json
{
  "name": "jest-sample",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "test": "jest"
  },
```

ルートディレクトリで下記を実行します。
```bash
# テストを実行
pnpm run test
```

#### 参考
[Vitestでモックを使ってテストを書く時の備忘録](https://belonginc.dev/members/ryo/posts/vitest-mocks)