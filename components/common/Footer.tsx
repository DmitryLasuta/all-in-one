import { ContactInfo, CopyrightInfo, Header, SocialLinks } from '@/components/common'

export const Footer = () => {
  return (
    <footer className="bg-accent p-4 text-secondary xl:bg-fluid bg-no-repeat bg-fixed border-t-2">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
            <ContactInfo />
          </div>
          <div className="">
            <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-8">
          <CopyrightInfo />
        </div>
      </div>
    </footer>
  )
}
