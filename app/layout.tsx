// import type { Metadata, Viewport } from 'next'
// import { Inter, Syne } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import './globals.css'

// const inter = Inter({
//   subsets: ['latin', 'cyrillic'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const syne = Syne({
//   subsets: ['latin'],
//   variable: '--font-syne',
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Bolat & Co — Внедрение AmoCRM и автоматизация бизнеса',
//   description:
//     'Bolat & Co — экспертное внедрение AmoCRM, настройка воронок продаж, автоматизация бизнес-процессов и интеграции. Увеличьте продажи и оптимизируйте бизнес.',
//   keywords: [
//     'AmoCRM',
//     'внедрение CRM',
//     'автоматизация продаж',
//     'интеграция CRM',
//     'воронка продаж',
//     'Bolat & Co',
//     'CRM для бизнеса',
//   ],
//   openGraph: {
//     type: 'website',
//     locale: 'ru_RU',
//     url: 'https://bolatco.kz',
//     siteName: 'Bolat & Co',
//     title: 'Bolat & Co — Внедрение AmoCRM и автоматизация бизнеса',
//     description:
//       'Экспертное внедрение AmoCRM, настройка воронок продаж и автоматизация бизнес-процессов для роста вашей компании.',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Bolat & Co',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Bolat & Co — Внедрение AmoCRM',
//     description: 'Автоматизация бизнеса и внедрение AmoCRM под ключ.',
//   },
//   robots: { index: true, follow: true },
//   generator: 'QUASAR',
// }

// export const viewport: Viewport = {
//   themeColor: '#0a0a0a',
//   width: 'device-width',
//   initialScale: 1,
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="ru" className={`${inter.variable} ${syne.variable}`}>
//       <body className="font-sans antialiased bg-background text-foreground">
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }




// import type { Metadata, Viewport } from 'next'
// import { Inter, Syne } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
// import { FacebookPixel } from '@/components/FacebookPixel'
// import './globals.css'

// const inter = Inter({
//   subsets: ['latin', 'cyrillic'],
//   variable: '--font-inter',
//   display: 'swap',
// })

// const syne = Syne({
//   subsets: ['latin'],
//   variable: '--font-syne',
//   display: 'swap',
// })

// export const metadata: Metadata = {
//   title: 'Bolat & Co — Внедрение AmoCRM и автоматизация бизнеса',
//   description:
//     'Bolat & Co — экспертное внедрение AmoCRM, настройка воронок продаж, автоматизация бизнес-процессов и интеграции. Увеличьте продажи и оптимизируйте бизнес.',
//   keywords: [
//     'AmoCRM',
//     'внедрение CRM',
//     'автоматизация продаж',
//     'интеграция CRM',
//     'воронка продаж',
//     'Bolat & Co',
//     'CRM для бизнеса',
//   ],
//   openGraph: {
//     type: 'website',
//     locale: 'ru_RU',
//     url: 'https://crmbolat.kz',
//     siteName: 'Bolat & Co',
//     title: 'Bolat & Co — Внедрение AmoCRM и автоматизация бизнеса',
//     description:
//       'Экспертное внедрение AmoCRM, настройка воронок продаж и автоматизация бизнес-процессов для роста вашей компании.',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Bolat & Co',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Bolat & Co — Внедрение AmoCRM',
//     description: 'Автоматизация бизнеса и внедрение AmoCRM под ключ.',
//   },
//   robots: { index: true, follow: true },
//   generator: 'QUASAR',
// }

// export const viewport: Viewport = {
//   themeColor: '#0a0a0a',
//   width: 'device-width',
//   initialScale: 1,
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="ru" className={`${inter.variable} ${syne.variable}`}>
//       <body className="font-sans antialiased bg-background text-foreground">
//         {children}
//         <Analytics />
//         <FacebookPixel />
//       </body>
//     </html>
//   )
// }




import type { Metadata, Viewport } from 'next'
import { Inter, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FacebookPixel } from '@/components/FacebookPixel'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bolat & Co — Внедрение AmoCRM и автоматизация бизнеса',
  description:
    'Bolat & Co — экспертное внедрение AmoCRM, настройка воронок продаж, автоматизация бизнес-процессов и интеграции. Увеличьте продажи и оптимизируйте бизнес.',
  keywords: [
    'AmoCRM',
    'внедрение CRM',
    'автоматизация продаж',
    'интеграция CRM',
    'воронка продаж',
    'Bolat & Co',
    'CRM для бизнеса',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://bolatco.kz',
    siteName: 'Bolat & Co',
    title: 'Bolat & Co — Внедрение AmoCRM и автоматизация бизнеса',
    description:
      'Экспертное внедрение AmoCRM, настройка воронок продаж и автоматизация бизнес-процессов для роста вашей компании.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bolat & Co',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bolat & Co — Внедрение AmoCRM',
    description: 'Автоматизация бизнеса и внедрение AmoCRM под ключ.',
  },
  robots: { index: true, follow: true },
  generator: 'QUASAR',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
        <GoogleAnalytics />
        <FacebookPixel />
      </body>
    </html>
  )
}