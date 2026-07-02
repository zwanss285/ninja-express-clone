import { HelpCircle, Mail, Phone, MessageCircle, BookOpen, Users, Shield, Clock, CheckCircle, MapPin, Package, Truck } from 'lucide-react'
import Breadcrumb from '../components/Breadcrumb'

export default function Bantuan() {
  const faqs = [
    {
      question: 'Bagaimana cara melacak kiriman?',
      answer: 'Masukkan nomor resi di halaman Lacak Kiriman atau gunakan fitur tracking di aplikasi Ninja Xpress. Anda juga bisa tracking melalui WhatsApp kami.',
      icon: HelpCircle,
      color: 'text-ninja-orange',
      bg: 'bg-orange-50'
    },
    {
      question: 'Berapa biaya pengiriman?',
      answer: 'Biaya pengiriman bervariasi tergantung berat, ukuran, dan tujuan. Anda bisa cek estimasi biaya di halaman Perkiraan Harga atau melalui kalkulator di aplikasi.',
      icon: BookOpen,
      color: 'text-ninja-blue',
      bg: 'bg-blue-50'
    },
    {
      question: 'Apa saja layanan yang tersedia?',
      answer: 'Ninja Regular (1-3 hari), Same-day (hari yang sama), Cargo (besar), Pengiriman Beku, Freight Forwarding (darat, laut, udara), dan Cross Border (Malaysia & Singapura).',
      icon: Package,
      color: 'text-ninja-green',
      bg: 'bg-green-50'
    },
    {
      question: 'Bagaimana cara menjadi Mitra Ninja?',
      answer: 'Daftar di halaman Mitra Ninja atau hubungi tim kami. Anda akan mendapatkan sumber penghasilan baru dengan bergabung dalam jaringan kami.',
      icon: Users,
      color: 'text-purple-600',
      bg: 'bg-purple-50'
    },
    {
      question: 'Apakah ada asuransi pengiriman?',
      answer: 'Ya, setiap paket yang dikirim melalui Ninja Xpress dilindungi asuransi untuk memberikan keamanan dan ketenangan bagi pengirim dan penerima.',
      icon: Shield,
      color: 'text-ninja-yellow',
      bg: 'bg-yellow-50'
    },
    {
      question: 'Bagaimana cara membatalkan pengiriman?',
      answer: 'Anda dapat membatalkan pengiriman melalui dashboard atau menghubungi customer service kami sebelum paket diproses di hub.',
      icon: Clock,
      color: 'text-red-500',
      bg: 'bg-red-50'
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'support@ninjaxpress.com',
      detail: 'Balas dalam 24 jam',
      color: 'text-ninja-orange',
      bg: 'bg-orange-50'
    },
    {
      icon: Phone,
      label: 'Telepon',
      value: '021-1234-5678',
      detail: 'Senin-Jumat, 08:00-17:00',
      color: 'text-ninja-green',
      bg: 'bg-green-50'
    },
    {
      icon: MessageCircle,
      label: 'Live Chat',
      value: 'Chat dengan CS kami',
      detail: 'Tersedia 24/7',
      color: 'text-ninja-blue',
      bg: 'bg-blue-50'
    }
  ]

  const tips = [
    { icon: MapPin, label: 'Pastikan alamat tujuan lengkap dan benar' },
    { icon: Package, label: 'Gunakan kemasan yang aman dan sesuai' },
    { icon: Truck, label: 'Pilih layanan sesuai kebutuhan waktu' },
    { icon: CheckCircle, label: 'Simpan nomor resi untuk tracking' },
  ]

  return (
    <main className="min-h-screen bg-ninja-gray">
      <Breadcrumb />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-ninja-dark to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="inline-block bg-ninja-orange/20 px-4 py-2 rounded-full mb-4">
            <span className="text-ninja-orange font-semibold">💡 Pusat Bantuan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pusat Bantuan
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Temukan jawaban untuk pertanyaan Anda atau hubungi tim dukungan kami.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className={`${method.bg} p-6 rounded-xl shadow-md hover:shadow-lg transition text-center group`}
            >
              <div className={`${method.bg} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                <method.icon className={`w-6 h-6 ${method.color}`} />
              </div>
              <h3 className="font-bold text-ninja-dark mb-2">{method.label}</h3>
              <p className="text-gray-600 font-medium">{method.value}</p>
              <p className="text-gray-500 text-sm mt-1">{method.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-ninja-dark text-center mb-12">
          Pertanyaan <span className="text-ninja-orange">Frequently Asked</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`${faq.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition group cursor-pointer border border-transparent hover:border-${faq.color.replace('text-', '')}`}
            >
              <div className="flex items-start gap-4">
                <div className={`${faq.bg} p-2 rounded-full group-hover:scale-110 transition`}>
                  <faq.icon className={`w-5 h-5 ${faq.color}`} />
                </div>
                <div>
                  <h3 className={`font-bold ${faq.color} mb-2`}>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-ninja-dark text-center mb-8">
            💡 Tips Pengiriman
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-700 bg-ninja-gray p-3 rounded-lg">
                <tip.icon className="w-5 h-5 text-ninja-orange flex-shrink-0" />
                <span>{tip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-12 bg-gradient-to-r from-ninja-orange/10 to-orange-50 p-8 rounded-xl max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-ninja-orange/10 p-2 rounded-full">
              <Clock className="w-5 h-5 text-ninja-orange" />
            </div>
            <h3 className="text-lg font-bold text-ninja-dark">Masih perlu bantuan?</h3>
          </div>
          <p className="text-gray-600">
            Kami siap membantu Anda! Hubungi tim dukungan kami melalui email, telepon, atau live chat.
          </p>
          <button className="mt-4 bg-ninja-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-ninja-orange-light transition shadow-md hover:shadow-lg hover:scale-105">
            Hubungi Kami
          </button>
        </div>
      </div>
    </main>
  )
}