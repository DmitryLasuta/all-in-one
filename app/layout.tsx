import './globals.css'
import type { Metadata } from 'next'
import { redHatDisplay } from './assets/fonts'
import { PiShoppingCartBold } from 'react-icons/pi'
import { NavigationMenu } from '@/components'
import { Logo } from '@/components/ui'
import { NavigationLinks } from '@/lib/types'

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

const navigationLinks: NavigationLinks[] = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'Privacy policy', href: '/privacy' },
  { title: 'About us', href: '/about' },
  { title: 'faq', href: '/faq' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.className}`}>
        <header className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed fixed top-0 w-full z-[100] border-b-2">
          <div className="flex items-center justify-between lg:justify-start lg:lg:gap-8 lg:px-10">
            <NavigationMenu links={navigationLinks} />
            <Logo />
            <div className="">
              <button
                className="block text-2xl p-2 lg:border-l-2 lg:pl-4 lg:text-3xl"
                type="button"
              >
                <PiShoppingCartBold />
              </button>
            </div>
          </div>
        </header>
        <main className="min-h-screen pt-[4.7rem]">{children}</main>
        <footer className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed border-t-2">
          <div className="container">
            <Logo />
          </div>
        </footer>
      </body>
    </html>
  )
}
