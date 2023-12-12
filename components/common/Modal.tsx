'use client'

import React, { useEffect } from 'react'

import { RiCloseLine } from 'react-icons/ri'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '12px'
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = 'auto'
      document.body.style.paddingRight = '0'
    }
  }, [isOpen, onClose])

  return isOpen
    ? createPortal(
        <dialog
          open
          className="w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#27272779] z-[1000]"
        >
          <div className="flex items-center justify-center max-w-[90%] md:max-w-[75%] mx-auto h-full">
            <div className="bg-primary p-4 relative rounded flex gap-2">
              <div className="border-2 rounded p-4">{children}</div>
              <button className="rounded text-gray-500 hover:text-gray-700 self-start" onClick={onClose}>
                <RiCloseLine size={24} />
              </button>
            </div>
          </div>
        </dialog>,

        document.body
      )
    : null
}
