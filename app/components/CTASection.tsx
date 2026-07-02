import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-ninja-red to-ninja-red-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ayo kirim paket kamu sekarang
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Ninja Xpress berkomitmen untuk memberikan layanan kirim barang antar kota dan provinsi 
            di seluruh Indonesia. Daftarkan diri kamu sekarang juga!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition border border-white/20">
            <div className="text-3xl mb-2">📦</div>
            <h3 className="text-xl font-bold mb-4">Pengiriman di atas 250 per bulan</h3>
            <p className="text-white/90 mb-6">
              Untuk kamu yang memiliki pengiriman paket di atas 250 per bulan, daftar di sini!
            </p>
            <Link href="/daftar">
              <button className="w-full bg-white text-ninja-red px-6 py-3 rounded-full font-semibold hover:shadow-xl transition">
                Daftar sekarang!
              </button>
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition border border-white/20">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="text-xl font-bold mb-4">Pengiriman di bawah 250 per bulan</h3>
            <p className="text-white/90 mb-6">
              Untuk kamu yang memiliki pengiriman paket di bawah 250 per bulan, daftar di sini!
            </p>
            <Link href="/daftar">
              <button className="w-full bg-white text-ninja-red px-6 py-3 rounded-full font-semibold hover:shadow-xl transition">
                Daftar sekarang!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}