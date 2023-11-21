import type { Metadata } from 'next'
import './globals.css'
import { redHatDisplay } from './assets/fonts'
import { dockerOne } from './assets/fonts'
import Link from 'next/link'
import { PiShoppingCartBold } from 'react-icons/pi'
import { NavigationMenu } from '@/components'

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
      <body className={`${redHatDisplay.className}`}>
        <header className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed fixed top-0 w-full z-[100] border-b-2">
          <div className="flex items-center justify-between lg:justify-start lg:lg:gap-8 lg:px-10">
            <NavigationMenu />
            <Link
              className={`${dockerOne.className} text-xl md:text-3xl inline lg:ml-auto xl:mr-[10%] after:content-['>>'] after:pl-2 before:content-['<<'] before:pr-2`}
              href={'/'}
            >
              <span className="-tracking-tighter">all in one</span>
            </Link>
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
        <main className="min-h-screen mt-20">{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
