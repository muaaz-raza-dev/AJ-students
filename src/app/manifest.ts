import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AJ Students',
    short_name: 'AJSTD',
    description: 'Student panel to track student acedmic progress.', 
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/logo/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
    lang: 'en',
    
  }
}