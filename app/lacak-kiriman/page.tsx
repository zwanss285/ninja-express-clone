'use client'
import { useState } from 'react'
import { Search, Package, MapPin, Calendar, CheckCircle, Clock, Truck, AlertCircle, Phone, Mail } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export default function LacakKiriman() {
  const [resi, setResi] = useState<string>('')
  const [tracked, setTracked] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (resi.trim()) {
      setTracked(true)
    }
  }

  const trackingData = {
    status: 'Dalam Perjalanan',
    statusColor: 'text-ninja-orange',
    statusBg: 'bg-orange-50',
    origin: 'Jakarta',
    destination: 'Surabaya',
    estimated: '3 Juli 2026',
    weight: '2.5 kg',
    service: 'Ninja Regular',
    history: [
      { date: '2 Juli 2026, 08:00', status: 'Paket diterima di hub Jakarta', icon: Package, done: true },
      { date: '2 Juli 2026, 10:30', status: 'Paket dalam proses sortir', icon: CheckCircle, done: true },
      { date: '2 Juli 2026, 14:00', status: 'Paket sedang dalam perjalanan ke Surabaya', icon: Truck, done: true },
      { date: '3 Juli 2026, 06:00', status: 'Paket tiba di hub Surabaya', icon: MapPin, done: false },
      { date: '3 Juli 2026, 10:00', status: 'Paket dalam proses pengantaran', icon: Clock, done: false },
    ]
  }

  return (
    <main className="min-h-screen bg-ninja-gray">
      <Breadcrumb />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-ninja-red to-ninja-red-light text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Lacak Kiriman
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Masukkan nomor resi Anda untuk melacak status pengiriman secara real-time.
          </p>
        </div>
      </div>

      {/* Tracking Form */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Masukkan nomor resi (contoh: NX1234567890)"
                value={resi}
                onChange={(e) => setResi(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-ninja-orange focus:border-transparent"
              />
            </div>
            <button 
              type="submit"
              className="bg-ninja-red text-white px-8 py-3 rounded-full hover:bg-ninja-orange-light transition font-semibold shadow-md hover:shadow-lg"
            >
              Lacak
            </button>
          </form>
          
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500">
            <span>Contoh: NX1234567890</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
            <span>NX9876543210</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
            <span>NX5555555555</span>
          </div>
        </div>
      </div>

      {/* Tracking Result */}
      {tracked && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            {/* Status Card */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-ninja-orange mb-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-sm text-gray-500">Nomor Resi</div>
                  <div className="text-2xl font-bold text-ninja-dark">{resi}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Status</div>
                  <div className={`inline-flex items-center gap-2 ${trackingData.statusBg} ${trackingData.statusColor} px-4 py-2 rounded-full font-semibold`}>
                    <CheckCircle className="w-5 h-5" />
                    {trackingData.status}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
                <div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Asal
                  </div>
                  <div className="font-semibold">{trackingData.origin}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> Tujuan
                  </div>
                  <div className="font-semibold">{trackingData.destination}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> Estimasi
                  </div>
                  <div className="font-semibold">{trackingData.estimated}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 flex items-center gap-1">
                    <Package className="w-4 h-4" /> Layanan
                  </div>
                  <div className="font-semibold">{trackingData.service}</div>
                </div>
              </div>
            </div>

            {/* History Timeline */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-ninja-dark mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-ninja-orange" />
                Riwayat Pengiriman
              </h3>
              <div className="space-y-6">
                {trackingData.history.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.done ? 'bg-ninja-orange text-white' : 'bg-gray-100 text-gray-400'
                      }`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      {index < trackingData.history.length - 1 && (
                        <div className={`w-0.5 h-full my-1 ${item.done ? 'bg-ninja-orange' : 'bg-gray-200'}`}></div>
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className={`font-semibold ${item.done ? 'text-ninja-dark' : 'text-gray-400'}`}>
                        {item.status}
                      </div>
                      <div className="text-sm text-gray-500">{item.date}</div>
                    </div>
                    {item.done && (
                      <div className="text-xs text-ninja-green font-semibold self-center">✓ Selesai</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bantuan */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
              <p className="text-gray-600">
                💬 Ada pertanyaan tentang kiriman Anda? 
                <a href="/bantuan" className="text-ninja-orange font-semibold hover:underline ml-1">
                  Hubungi Kami
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}