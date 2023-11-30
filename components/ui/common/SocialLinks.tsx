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
    <ul className="flex">
      {socialLinks.map(({ title, href, icon }) => (
        <li key={title}>
          <a
            href={href}
            title={`Contact us on ${title}`}
            aria-label={`Contact us on ${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
