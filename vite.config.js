import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://wildcraft958.github.io/SWG_portfolio_react/',
  css : {
    modules : {
      localsConvention : "camelCase"
    }
  }
})
