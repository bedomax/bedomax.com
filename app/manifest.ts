import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bedomax.com'
  
  return {
    name: 'Bedo - Software Engineer',
    short_name: 'Bedo',
    description: 'Personal website of Bedo - Software Engineer, Entrepreneur, and Growth Hacker',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E3A8A',
    theme_color: '#3B5BDB',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    categories: ['business', 'productivity', 'developer'],
    lang: 'en',
    orientation: 'portrait-primary',
    scope: '/',
  }
}
