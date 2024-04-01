import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  // Next.jsアプリへのパスを指定して、テスト環境に 「next.config.js」および「.env」ファイルをロードします
  dir: "./",
})

// 「Jest」に渡すカスタム構成を追加
const config = {
  // 各テストを実行する前に、さらにセットアップ オプションを追加
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  testEnvironment: "jest-environment-jsdom",
}

// createJestConfig は、next/jest が非同期の Next.js 構成をロードできるようにするために、この方法でエクスポートされます。
export default createJestConfig(config)
