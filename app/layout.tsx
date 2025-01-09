import { type Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'OtherSite - We love Web Development',
  },
  description: 'Maßgeschneiderte Lösungen für Online-Shops',
  icons: {
    icon: '/favicons/favicon.ico',
    shortcut: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/favicons/manifest.json',
      },
    ],
  },
  themeColor: '#ffffff',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
