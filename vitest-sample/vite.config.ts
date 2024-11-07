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