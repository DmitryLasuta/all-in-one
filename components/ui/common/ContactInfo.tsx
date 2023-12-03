import { FaEnvelope, FaPhone } from 'react-icons/fa'

export const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <p className="flex items-center">
        <FaEnvelope className="mr-2" />
        <span>Email:</span> example@email.com
      </p>
      <p className="flex items-center">
        <FaPhone className="mr-2" />
        <span>Phone:</span> +1234567890
      </p>
    </div>
  )
}
