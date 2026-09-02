import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true, // Build işlemi bittiğinde raporu tarayıcıda otomatik açar
      filename: 'bundle-analizi.html', // Oluşturulacak rapor dosyasının adı
      gzipSize: true, // Gzip ile sıkıştırıldıktan sonraki gerçek boyutları gösterir
      brotliSize: true // Brotli sıkıştırması sonrası boyutları gösterir
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Framer motion'ı tamamen ayrı bir chunk'a ayır
            if (id.includes('framer-motion')) {
              return 'vendor-framer';
            }
            // Geri kalan tüm kütüphaneler 'vendor' dosyasına gitsin
            return 'vendor';
          }
        }
      }
    }
  }
})
