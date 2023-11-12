import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  )
}
