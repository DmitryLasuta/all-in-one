import './globals.css'

import { ContactInfo, CopyrightInfo, Logo, SocialLinks } from '@/components/ui/common'

import type { Metadata } from 'next'
import { NavigationLinks } from '@/lib/types'
import { PiShoppingCartBold } from 'react-icons/pi'
import { WebsiteNavigation } from '@/components'
import { redHatDisplay } from './assets/fonts'
import { routes } from '@/lib/utils'

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
  { title: 'Home', href: routes.home },
  { title: 'Products', href: routes.products() },
  { title: 'Privacy policy', href: routes.privacy },
  { title: 'About us', href: routes.about },
  { title: 'faq', href: routes.faq },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.className}`}>
        {/* header */}
        <header className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed fixed top-0 w-full z-[100] border-b-2">
          <div className="flex items-center justify-between lg:justify-start lg:lg:gap-8 lg:px-10">
            <WebsiteNavigation links={navigationLinks} />
            <Logo />
            <div className="">
              <button className="block text-2xl p-2 lg:border-l-2 lg:pl-4 lg:text-3xl" type="button">
                <PiShoppingCartBold />
              </button>
            </div>
          </div>
        </header>
        {/* main content */}
        <div className="min-h-screen pt-[4.7rem]">{children}</div>
        {/* footer */}
        <footer className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed border-t-2">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
              <div className="mb-6 md:mb-0">
                <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
                <ContactInfo />
              </div>
              <div className="">
                <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
                <SocialLinks />
              </div>
            </div>
            <div className="mt-8">
              <CopyrightInfo />
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
