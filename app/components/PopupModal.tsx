'use client'
import { X } from 'lucide-react'
import { ReactNode, useEffect } from 'react'

interface PopupModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export default function PopupModal({ isOpen, onClose, title, children }: PopupModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-[100] animate-fadeIn"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header - Lebih kecil di mobile */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 rounded-t-2xl flex items-center justify-between z-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-ninja-red">{title}</h2>
            <button 
              onClick={onClose}
              className="p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="p-4 sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}