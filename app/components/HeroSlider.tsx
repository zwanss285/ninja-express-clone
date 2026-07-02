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

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const handleMouseEnter = () => setIsAutoPlay(false)
  const handleMouseLeave = () => setIsAutoPlay(true)

  const current = slides[currentSlide]

  return (
    <section 
      className="relative pt-20 sm:pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden min-h-[600px] sm:min-h-[700px] md:min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${current.bgColor} transition-all duration-700`} />
      
      {/* Background Pattern - Lebih kecil di mobile */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            {/* Badge - Lebih kecil di mobile */}
            {current.badge && (
              <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4 animate-fadeIn">
                <span className="text-xs sm:text-sm font-semibold">{current.badge}</span>
              </div>
            )}
            
            {/* Title - Ukuran lebih kecil di mobile */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight text-white animate-fadeIn">
              {current.title} <br />
              <span className="text-yellow-300">{current.subtitle}</span>
            </h1>
            
            {/* Description - Lebih kecil di mobile */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-white/90 animate-fadeIn line-clamp-3 sm:line-clamp-none">
              {current.description}
            </p>
            
            {/* Buttons - Stack di mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeIn">
              <Link href={current.buttonLink} className="w-full sm:w-auto">
                <button className="bg-white text-ninja-red px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:shadow-xl transition flex items-center justify-center gap-2 text-sm sm:text-base w-full">
                  {current.buttonText}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
                </button>
              </Link>
              <button className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-white hover:text-ninja-red transition text-sm sm:text-base w-full sm:w-auto">
                Perkiraan Harga
              </button>
            </div>
          </div>

          {/* Right Side - Stats - Layout berubah di mobile */}
          <div className="lg:w-1/2 w-full animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="bg-white/15 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl hover:bg-white/25 transition">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300">120M+</div>
                <div className="text-xs sm:text-sm text-white/90 leading-tight">Orang telah menggunakan layanan kami</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl hover:bg-white/25 transition">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300">2M</div>
                <div className="text-xs sm:text-sm text-white/90 leading-tight">Paket terkirim setiap hari</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl col-span-2 hover:bg-white/25 transition">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300">99%</div>
                <div className="text-xs sm:text-sm text-white/90 leading-tight">Mencakup wilayah Indonesia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators - Lebih kecil di mobile */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 sm:w-10 md:w-12 bg-white' 
                  : 'w-2 sm:w-2.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows - Hidden di mobile, muncul di tablet ke atas */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  )
}