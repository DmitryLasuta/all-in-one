import { Container } from '@/components/common'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function NotFound() {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 flex flex-col gap-4  items-center uppercase">
            <div className="text-accent text-[100px]">
              <FaExclamationTriangle />
            </div>
            404 - Page Not Found
          </h1>
          <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </Container>
  )
}
