import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// ربط Jest بمشروع Next.js ليعرف كيف يترجم كود الـ JSX/TSX تلقائياً
const createJestConfig = nextJest({
  dir: './',
})

// إعدادات Jest المخصصة
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // لتوفير بيئة متصفح وهمية لـ React Testing Library
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ملف لتجهيز بيئة الاختبار قبل البدء
}

export default createJestConfig(config)