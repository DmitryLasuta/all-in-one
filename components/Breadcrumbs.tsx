import Link from 'next/link'

export interface BreadcrumbProps {
  label: string
  href: string
  active?: boolean
}

export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: BreadcrumbProps[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ul className="flex flex-wrap items-center text-xl md:text-2xl">
        {breadcrumbs.map(({ href, label, active }, index) => (
          <li
            key={href}
            className={`text-[0.7rem] md:text-xl text-center md:text-left uppercase h-fit ${active ? 'font-bold' : ''}`}
          >
            <Link href={href} className="mb-4">
              {label}
            </Link>
            {index < breadcrumbs.length - 1 ? <span className="mx-3 inline-block">{'>>'}</span> : null}
          </li>
        ))}
      </ul>
    </nav>
  )
}
