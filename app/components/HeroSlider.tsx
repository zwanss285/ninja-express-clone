'use client'
import { useState, useEffect } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  buttonText: string
  buttonLink: string
  bgColor: string
  badge?: string
  image?: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Layanan pengiriman barang yang',
    subtitle: 'Siap Bantu Sampai Tujuan',
    description: 'Kami berdedikasi untuk selalu memberikan solusi, kemudahan dan ketepatan dengan menyediakan berbagai layanan pengiriman barang sesuai kebutuhan bisnis kamu.',
    buttonText: 'Lacak Kiriman',
    buttonLink: '/lacak-kiriman',
    bgColor: 'from-ninja-red via-ninja-red-dark to-ninja-red',
    badge: '🚀 #1 Logistik di Indonesia'
  },
  {
    id: 2,
    title: 'Diskon 20% untuk',
    subtitle: 'Pengiriman Pertama Anda!',
    description: 'Nikmati promo spesial untuk pengiriman pertama Anda. Dapatkan diskon 20% dan gratis ongkir untuk 10 paket pertama.',
    buttonText: 'Dapatkan Promo',
    buttonLink: '/program-promo',
    bgColor: 'from-orange-500 via-orange-600 to-red-600',
    badge: '🔥 Promo Spesial'
  },
  {
    id: 3,
    title: 'Ninja B2BR Solutions',
    subtitle: 'Supply Chain Management',
    description: 'Solusi SCM yang praktis dan ekonomis untuk bisnis Anda. Optimalkan supply chain dengan teknologi terkini.',
    buttonText: 'Pelajari Lebih Lanjut',
    buttonLink: '/ninja-b2br',
    bgColor: 'from-blue-600 via-blue-700 to-indigo-800',
    badge: '💼 Untuk Bisnis'
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto play
  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  // Pause auto play on hover
  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  const current = slides[currentSlide]

  return (
    <section 
      className="relative pt-32 pb-20 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${current.bgColor} transition-all duration-700`} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            {/* Badge */}
            {current.badge && (
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-fadeIn">
                <span className="text-sm font-semibold">{current.badge}</span>
              </div>
            )}
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fadeIn">
              {current.title} <br />
              <span className="text-yellow-300">{current.subtitle}</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl mb-8 text-white/90 animate-fadeIn">
              {current.description}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
              <Link href={current.buttonLink}>
                <button className="bg-white text-ninja-red px-8 py-3 rounded-full font-semibold hover:shadow-xl transition flex items-center justify-center w-full sm:w-auto group">
                  {current.buttonText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-ninja-red transition w-full sm:w-auto">
                Perkiraan Harga
              </button>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div className="lg:w-1/2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl hover:bg-white/25 transition group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-300">120M+</div>
                <div className="text-sm text-white/90">Orang telah menggunakan layanan kami</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl hover:bg-white/25 transition group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-300">2M</div>
                <div className="text-sm text-white/90">Paket terkirim setiap hari</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl col-span-2 hover:bg-white/25 transition group cursor-pointer">
                <div className="text-3xl font-bold text-yellow-300">99%</div>
                <div className="text-sm text-white/90">Mencakup wilayah Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-12 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-12 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition z-20 hidden md:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition z-20 hidden md:block"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}