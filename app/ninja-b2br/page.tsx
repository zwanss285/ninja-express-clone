import { Truck, TrendingUp, Shield, Clock, Users, BarChart, Package, Globe, Ship, Zap, CheckCircle, Award } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export default function NinjaB2BR() {
  const features = [
    {
      icon: Truck,
      title: 'Pengiriman Praktis',
      description: 'Solusi SCM yang praktis dan ekonomis untuk bisnis Anda',
      color: 'text-ninja-orange',
      bg: 'bg-orange-50',
      border: 'border-ninja-orange'
    },
    {
      icon: TrendingUp,
      title: 'Efisien & Hemat',
      description: 'Optimalkan supply chain Anda dengan biaya yang kompetitif',
      color: 'text-ninja-green',
      bg: 'bg-green-50',
      border: 'border-ninja-green'
    },
    {
      icon: Shield,
      title: 'Terpercaya',
      description: 'Dengan pengalaman melayani 2,000,000+ bisnis di Asia Tenggara',
      color: 'text-ninja-blue',
      bg: 'bg-blue-50',
      border: 'border-ninja-blue'
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Pengiriman tepat waktu dengan tracking real-time',
      color: 'text-ninja-yellow',
      bg: 'bg-yellow-50',
      border: 'border-ninja-yellow'
    },
    {
      icon: Package,
      title: 'Fulfillment Center',
      description: 'Pusat pemenuhan pesanan dengan teknologi canggih',
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-600'
    },
    {
      icon: Globe,
      title: 'Jangkauan Nasional',
      description: 'Mencakup 99% wilayah Indonesia dengan 1000+ hub',
      color: 'text-red-500',
      bg: 'bg-red-50',
      border: 'border-red-500'
    }
  ]

  const benefits = [
    { icon: CheckCircle, label: 'Tracking Real-time' },
    { icon: CheckCircle, label: 'Laporan Analitik' },
    { icon: CheckCircle, label: 'Dukungan 24/7' },
    { icon: CheckCircle, label: 'Integrasi API' },
    { icon: CheckCircle, label: 'Solusi Kustom' },
    { icon: CheckCircle, label: 'Asuransi Pengiriman' },
  ]

  return (
    <main className="min-h-screen bg-ninja-gray">
      <Breadcrumb />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-ninja-dark to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-ninja-orange/20 px-4 py-2 rounded-full mb-4">
            <span className="text-ninja-orange font-semibold">B2BR Solution</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ninja B2BR
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Layanan supply chain management (SCM) yang praktis dan ekonomis untuk kebutuhan bisnis Anda.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-ninja-orange">2M+</div>
            <p className="text-gray-600 text-sm">Paket/Hari</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ninja-green">99%</div>
            <p className="text-gray-600 text-sm">Cakupan Wilayah</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ninja-blue">1000+</div>
            <p className="text-gray-600 text-sm">Hubs & Stations</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-ninja-yellow">120M+</div>
            <p className="text-gray-600 text-sm">Pengguna</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ninja-dark mb-4">
            Keunggulan <span className="text-ninja-orange">Ninja B2BR</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan logistik bisnis Anda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bg} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 ${feature.border} group`}
            >
              <div className="flex items-start gap-4">
                <div className={`${feature.bg} p-3 rounded-full group-hover:scale-110 transition`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${feature.color} mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-ninja-dark text-center mb-8">
            🎯 Apa yang Anda Dapatkan?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <benefit.icon className="w-5 h-5 text-ninja-green flex-shrink-0" />
                <span>{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-ninja-orange to-ninja-orange-light p-8 rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Siap Mengoptimalkan Bisnis Anda?</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan bisnis yang telah menggunakan Ninja B2BR
          </p>
          <button className="bg-white text-ninja-orange px-8 py-3 rounded-full font-semibold hover:shadow-xl transition hover:scale-105">
            Hubungi Kami Sekarang
          </button>
        </div>
      </div>
    </main>
  )
}