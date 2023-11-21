import Link from 'next/link'
import { dockerOne } from '@/app/assets/fonts'

export const Logo = () => (
  <Link
    className={`${dockerOne.className} text-xl md:text-3xl inline lg:ml-auto xl:mr-[10%] after:content-['>>'] after:pl-2 before:content-['<<'] before:pr-2`}
    href={'/'}
  >
    <span className="-tracking-tighter">all in one</span>
  </Link>
)
