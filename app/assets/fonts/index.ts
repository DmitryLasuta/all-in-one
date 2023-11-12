import localFont from 'next/font/local'
import { Josefin_Sans, Red_Hat_Display } from 'next/font/google'

export const dockerOne = localFont({
  src: './Docker One.ttf',
})

export const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'] })
export const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
})
