const mokoNavigationLinks = [
  { title: 'Home', href: '/' },
  { title: 'Home1', href: '/' },
  { title: 'Home2', href: '/' },
  { title: 'Home3', href: '/' },
]

export const SideNav = ({
  navigationLinks,
  position,
}: {
  navigationLinks?: any[]
  position: 'left' | 'right'
}) => {
  return (
    <aside className="p-4 bg-primary -order-last md:order-none  md:w-1/6 border md:h-full">
      SideNav
    </aside>
  )
}
