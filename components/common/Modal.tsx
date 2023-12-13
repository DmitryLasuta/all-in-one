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
        <dialog open className="w-screen h-screen fixed top-0 left-0 bg-[#27272779] z-[1000]">
          <div className="flex items-center justify-center max-w-[90%] md:max-w-[75%] mx-auto h-full" onClick={onClose}>
            <div className="bg-primary p-2 rounded relative pt-8" onClick={event => event.stopPropagation()}>
              <button className="absolute top-2 right-2 rounded" onClick={onClose}>
                <RiCloseLine size={24} />
              </button>
              <div className="border-2 rounded p-2 overflow-y-auto max-h-[90vh]">{children}</div>
            </div>
          </div>
        </dialog>,

        document.body
      )
    : null
}
