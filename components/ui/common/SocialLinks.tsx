import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const socialLinks = [
  {
    title: 'facebook',
    href: 'https://facebook.com',
    icon: <FaFacebook />,
  },
  {
    title: 'twitter',
    href: 'https://twitter.com',
    icon: <FaTwitter />,
  },
  {
    title: 'instagram',
    href: 'https://instagram.com',
    icon: <FaInstagram />,
  },
]

export const SocialLinks = () => {
  return (
    <ul className="flex items-center justify-between gap-2 text-2xl">
      {socialLinks.map(({ title, href, icon }) => (
        <li key={title} className="hover:text-primary transition-colors">
          <a
            href={href}
            title={`Contact us on ${title}`}
            aria-label={`Contact us on ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
