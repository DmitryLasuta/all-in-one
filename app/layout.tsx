import './globals.css'

import { Footer, Header } from '@/components/common'

import type { Metadata } from 'next'
import { ReduxStoreProvider } from '@/components'
import { redHatDisplay } from './assets/fonts'

export const metadata: Metadata = {
  manifest: './manifest.json',
  title: 'All in one',
  description:
    'All in one is your one-stop shop for all your needs! We offer a wide selection of products across a variety of categories, including clothing, electronics, shoes, home goods, and more. We provide high-quality products at affordable prices and fast shipping. Visit our app in one website today and start shopping!',
  authors: {
    name: 'Dmitry Lasuta',
    url: 'https://github.com/DmitryLasuta',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ReduxStoreProvider>
        <body className={`${redHatDisplay.className}`}>
          <Header />
          {/* pages content */}
          <div className="min-h-screen pt-[4.7rem]">{children}</div>
          <Footer />
        </body>
      </ReduxStoreProvider>
    </html>
  )
}
