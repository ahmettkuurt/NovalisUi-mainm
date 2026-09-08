import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    visualizer({
      open: true, // Build işlemi bittiğinde raporu tarayıcıda otomatik açar
      filename: 'bundle-analizi.html', // Oluşturulacak rapor dosyasının adı
      gzipSize: true, // Gzip ile sıkıştırıldıktan sonraki gerçek boyutları gösterir
      brotliSize: true // Brotli sıkıştırması sonrası boyutları gösterir
    }),
    Sitemap({
      hostname: 'https://novaliscleaning.com', // Sitenin tam adresi
      dynamicRoutes: [ // Buraya sitendeki rotaları ekle
        '/',
        '/hizmetler',
        '/iletisim'
      ],
      generateRobotsTxt: true // İstersen robots.txt dosyasını da otomatik oluşturur
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
