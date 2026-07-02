'use client'
import { useState } from 'react'
import { Menu, X, ChevronDown, Package, Snowflake, Ship, Truck, Globe, Users, Gift, Clock, Shield, HelpCircle, Home } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import PopupModal from './PopupModal'

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [activePopup, setActivePopup] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name)
  }

  const openPopup = (name: string) => {
    setActivePopup(name)
    setIsOpen(false)
  }

  const closePopup = () => {
    setActivePopup(null)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Konten untuk setiap popup
  const popupContent = {
    'Program & Promo': {
      title: 'Program & Promo',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-ninja-red">
              <h4 className="font-bold text-ninja-red">🔥 Diskon 20%</h4>
              <p className="text-gray-600 text-sm">Nikmati diskon 20% untuk pengiriman pertama Anda</p>
              <button className="mt-2 text-ninja-red font-semibold text-sm hover:underline">Dapatkan Promo →</button>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border-l-4 border-ninja-green">
              <h4 className="font-bold text-ninja-green">🎁 Gratis Ongkir</h4>
              <p className="text-gray-600 text-sm">Gratis ongkir untuk 10 paket pertama Anda</p>
              <button className="mt-2 text-ninja-green font-semibold text-sm hover:underline">Dapatkan Promo →</button>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl border-l-4 border-ninja-yellow">
              <h4 className="font-bold text-yellow-600">💰 Cashback 50rb</h4>
              <p className="text-gray-600 text-sm">Cashback Rp50.000 untuk pengiriman bulk 100+ paket</p>
              <button className="mt-2 text-yellow-600 font-semibold text-sm hover:underline">Dapatkan Promo →</button>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-ninja-blue">
              <h4 className="font-bold text-ninja-blue">⭐ Ninja Points</h4>
              <p className="text-gray-600 text-sm">Kumpulkan poin setiap pengiriman dan tukarkan hadiah</p>
              <button className="mt-2 text-ninja-blue font-semibold text-sm hover:underline">Dapatkan Promo →</button>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link href="/program-promo" className="text-ninja-red font-semibold hover:underline" onClick={closePopup}>
              Lihat Semua Promo →
            </Link>
          </div>
        </div>
      )
    },
    'Ninja B2BR': {
      title: 'Ninja B2BR',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-ninja-dark">Layanan Supply Chain Management</h3>
          <p className="text-gray-600">Solusi SCM yang praktis dan ekonomis untuk bisnis Anda.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-orange-50 p-4 rounded-xl">
              <h4 className="font-bold text-ninja-red">🚚 Pengiriman Praktis</h4>
              <p className="text-gray-600 text-sm">Solusi SCM yang praktis dan ekonomis</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-bold text-ninja-green">📈 Efisien & Hemat</h4>
              <p className="text-gray-600 text-sm">Optimalkan supply chain dengan biaya kompetitif</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-ninja-blue">🛡️ Terpercaya</h4>
              <p className="text-gray-600 text-sm">Melayani 2,000,000+ bisnis di Asia Tenggara</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <h4 className="font-bold text-yellow-600">⏰ Tepat Waktu</h4>
              <p className="text-gray-600 text-sm">Pengiriman tepat waktu dengan tracking real-time</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="bg-ninja-red text-white px-6 py-2 rounded-full hover:bg-ninja-red-dark transition" onClick={closePopup}>
              Hubungi Kami
            </button>
          </div>
        </div>
      )
    },
    'Lacak Kiriman': {
      title: 'Lacak Kiriman',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-ninja-dark">Lacak Kiriman Anda</h3>
          <p className="text-gray-600">Masukkan nomor resi untuk melacak status pengiriman.</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <input 
              type="text" 
              placeholder="Masukkan nomor resi" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ninja-red"
            />
            <button className="bg-ninja-red text-white px-6 py-3 rounded-full hover:bg-ninja-red-dark transition">
              Lacak
            </button>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Contoh: NX1234567890 | NX9876543210
          </div>
          <div className="bg-gray-50 p-4 rounded-xl mt-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex-1">
                <div className="text-gray-500">Status</div>
                <div className="font-semibold text-ninja-green">✓ Dalam Perjalanan</div>
              </div>
              <div className="flex-1">
                <div className="text-gray-500">Estimasi</div>
                <div className="font-semibold">3 Juli 2026</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    'Bantuan': {
      title: 'Pusat Bantuan',
      content: (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-ninja-dark">Ada yang bisa kami bantu?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded-xl">
              <h4 className="font-bold text-ninja-red">📦 Cara Tracking</h4>
              <p className="text-gray-600 text-sm">Masukkan nomor resi di halaman Lacak Kiriman</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h4 className="font-bold text-ninja-green">💰 Biaya Pengiriman</h4>
              <p className="text-gray-600 text-sm">Cek tarif pengiriman di halaman Perkiraan Harga</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-ninja-blue">📞 Hubungi Kami</h4>
              <p className="text-gray-600 text-sm">Email: support@ninjaxpress.com</p>
              <p className="text-gray-600 text-sm">Tel: 021-1234-5678</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl">
              <h4 className="font-bold text-yellow-600">💬 Live Chat</h4>
              <p className="text-gray-600 text-sm">Chat dengan CS kami 24/7</p>
            </div>
          </div>
        </div>
      )
    }
  }

  const dropdowns = {
    'Program & Promo': {
      items: [
        { icon: Gift, label: 'Lihat Semua Promo', href: '#' },
        { icon: Clock, label: 'Program Berlangsung', href: '#' },
      ]
    },
    'Ninja B2BR': {
      items: [
        { icon: Truck, label: 'SCM Solution', href: '#' },
        { icon: Ship, label: 'Freight Forwarding', href: '#' },
        { icon: Globe, label: 'Cross Border', href: '#' },
      ]
    },
    'Lacak Kiriman': {
      items: [
        { icon: Package, label: 'Tracking Reguler', href: '#' },
      ]
    },
    'Bantuan': {
      items: [
        { icon: HelpCircle, label: 'FAQ', href: '#' },
        { icon: Users, label: 'Hubungi Kami', href: '#' },
      ]
    }
  }

  return (
    <>
      <header className="bg-black shadow-lg fixed w-full top-0 z-50 border-b-2 border-ninja-red">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 hover:opacity-80 transition cursor-pointer"
            >
              <Image 
                src="/image/ninjaxpress-logo-white.png"
                alt="Ninja Xpress Logo"
                width={75}
                height={75}
                className="object-contain"
                priority
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {Object.entries(dropdowns).map(([label]) => (
                <button
                  key={label}
                  onClick={() => openPopup(label)}
                  className="text-ninja-white hover:text-ninja-red transition font-medium flex items-center gap-1 py-2 text-md"
                >
                  {label}
                </button>
              ))}
              
              <button className="bg-ninja-red text-white px-6 py-2 rounded-full hover:bg-ninja-red-dark transition shadow-md hover:shadow-lg text-sm">
                Daftar
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-ninja-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col space-y-2">
                {Object.entries(dropdowns).map(([label]) => (
                  <button
                    key={label}
                    onClick={() => {
                      openPopup(label)
                      setIsOpen(false)
                    }}
                    className="text-left text-ninja-dark hover:text-ninja-red transition font-medium py-2 px-4 hover:bg-gray-50 rounded-lg"
                  >
                    {label}
                  </button>
                ))}
                
                <button className="bg-ninja-red text-white px-6 py-3 rounded-full hover:bg-ninja-red-dark transition w-full shadow-md">
                  Daftar
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Popup Modal */}
      {activePopup && popupContent[activePopup as keyof typeof popupContent] && (
        <PopupModal
          isOpen={!!activePopup}
          onClose={closePopup}
          title={popupContent[activePopup as keyof typeof popupContent].title}
        >
          {popupContent[activePopup as keyof typeof popupContent].content}
        </PopupModal>
      )}
    </>
  )
}