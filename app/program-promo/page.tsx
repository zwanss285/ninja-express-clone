import { Gift, Percent, Star, Clock, Users, Package, TrendingUp, Zap } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export default function ProgramPromo() {
  const promos = [
    {
      title: 'Diskon 20% Pengiriman Pertama',
      description: 'Nikmati diskon 20% untuk pengiriman pertama Anda',
      icon: Percent,
      color: 'text-ninja-orange',
      bg: 'bg-orange-50',
      border: 'border-ninja-orange',
      badge: '🔥 Populer'
    },
    {
      title: 'Gratis Ongkir 10 Paket',
      description: 'Gratis ongkir untuk 10 paket pertama Anda',
      icon: Gift,
      color: 'text-ninja-green',
      bg: 'bg-green-50',
      border: 'border-ninja-green',
      badge: '🎁 Terbatas'
    },
    {
      title: 'Cashback 50rb Bulk Order',
      description: 'Cashback Rp50.000 untuk pengiriman bulk 100+ paket',
      icon: Star,
      color: 'text-ninja-yellow',
      bg: 'bg-yellow-50',
      border: 'border-ninja-yellow',
      badge: '💰 Hemat'
    },
    {
      title: 'Ninja Points Program',
      description: 'Kumpulkan poin setiap pengiriman dan tukarkan dengan hadiah menarik',
      icon: Clock,
      color: 'text-ninja-blue',
      bg: 'bg-blue-50',
      border: 'border-ninja-blue',
      badge: '⭐ Eksklusif'
    },
    {
      title: 'Ninja Loyalty Reward',
      description: 'Dapatkan reward spesial untuk pelanggan setia Ninja Xpress',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-600',
      badge: '👑 Premium'
    },
    {
      title: 'Ninja Flash Sale',
      description: 'Promo kilat setiap Jumat dengan diskon hingga 50%',
      icon: Zap,
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-500',
      badge: '⚡ Flash'
    }
  ]

  return (
    <main className="min-h-screen bg-ninja-white">
      <Breadcrumb />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-ninja-red to-ninja-red-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Program & Promo
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Temukan berbagai program dan promo menarik dari Ninja Xpress untuk menghemat biaya pengiriman Anda.
          </p>
        </div>
      </div>

      {/* Promo Cards */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, index) => (
            <div 
              key={index}
              className={`${promo.bg} p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 ${promo.border} group`}
            >
              <div className="flex items-start gap-4">
                <div className={`${promo.bg} p-3 rounded-full group-hover:scale-110 transition`}>
                  <promo.icon className={`w-6 h-6 ${promo.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold ${promo.color}`}>
                      {promo.title}
                    </h3>
                    <span className="text-xs bg-white px-2 py-1 rounded-full shadow-sm">
                      {promo.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <button className="text-ninja-orange font-semibold hover:underline inline-flex items-center group-hover:gap-2 transition-all">
                    Dapatkan Promo
                    <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Syarat & Ketentuan */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-ninja-orange/10 p-2 rounded-full">
              <Clock className="w-5 h-5 text-ninja-orange" />
            </div>
            <h3 className="text-lg font-bold text-ninja-dark">Syarat & Ketentuan</h3>
          </div>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Promo berlaku untuk pengiriman domestik</li>
            <li>Minimal pengiriman 1 paket</li>
            <li>Berlaku sampai 31 Desember 2026</li>
            <li>Tidak dapat digabung dengan promo lainnya</li>
            <li>Promo hanya berlaku untuk pengguna baru</li>
          </ul>
        </div>
        
        {/* Info Tambahan */}
        <div className="mt-6 p-6 bg-gradient-to-r from-ninja-orange/10 to-orange-50 rounded-xl text-center">
          <p className="text-gray-600">
            💡 Ada pertanyaan tentang promo? <a href="/bantuan" className="text-ninja-orange font-semibold hover:underline">Kunjungi Pusat Bantuan</a>
          </p>
        </div>
      </div>
    </main>
  )
}   