import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export const SocialLinks = () => {
  return (
    <div className="flex">
      <a href="https://facebook.com" className="mr-4" target="_blank">
        <FaFacebook className="text-2xl" />
      </a>
      <a href="https://twitter.com" className="mr-4" target="_blank">
        <FaTwitter className="text-2xl" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FaInstagram className="text-2xl" />
      </a>
    </div>
  )
}
