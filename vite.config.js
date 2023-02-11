import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/demo-pwa/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'demo-pwa',
        short_name: 'demopwa',
        description: 'Website description(Could be same with index.html file)',
        theme_color: '#ffffff',
        start_url: '/',
        icons: [
          {
            src: 'demo.png',
            sizes: '192x192',
            type: 'image/png',
          }
        ],
      },
    })
  ],
})
