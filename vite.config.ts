import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
// 选项 failOnError: false 因为不想再开发阶段因为 ESLint 的错误打断开发，大家也可以使用默认配置，不传参数。
export default defineConfig({
	plugins: [
		react(),
		viteEslint({
			failOnError: false
		})
	]
})
