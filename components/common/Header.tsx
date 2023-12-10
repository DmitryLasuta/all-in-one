import { Logo } from '@/components/common'
import { Navigation } from '@/components'
import type { NavigationLinks } from '@/lib/types'
import { PiShoppingCartBold } from 'react-icons/pi'
import { routes } from '@/lib/utils'

const navigationLinks: NavigationLinks[] = [
  { title: 'Home', href: routes.home },
  { title: 'Products', href: routes.products.withParams({ category: 'all' }) },
  { title: 'Privacy policy', href: routes.privacy },
  { title: 'About us', href: routes.about },
  { title: 'faq', href: routes.faq },
]

export const Header = () => {
  return (
    <header className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed fixed top-0 w-full z-[100] border-b-2">
      <div className="flex items-center justify-between lg:justify-start lg:lg:gap-8">
        <Navigation links={navigationLinks} />
        <Logo />
        <div className="">
          <button className="block text-2xl p-2 lg:border-l-2 lg:pl-4 lg:text-3xl" type="button">
            <PiShoppingCartBold />
          </button>
        </div>
      </div>
    </header>
  )
}
