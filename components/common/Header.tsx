import { CartButton } from '@/components/common'
import { Logo } from '@/components/common'
import { Navigation } from '@/components'
import type { NavigationLinks } from '@/lib/types'
import { routes } from '@/lib/utils'

const navigationLinks: NavigationLinks[] = [
  { title: 'Home', href: routes.home },
  { title: 'Products', href: routes.products.withParams({ category: 'all' }) },
  { title: 'Privacy policy', href: routes.privacy },
  { title: 'About us', href: routes.about },
]

export const Header = () => {
  return (
    <header className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed fixed top-0 w-full z-[100] border-b-2">
      <div className="flex items-center justify-between lg:justify-start lg:lg:gap-8">
        <Navigation links={navigationLinks} />
        <Logo />
        <CartButton />
      </div>
    </header>
  )
}
