export default function TrustSection() {
    const platforms: string[] = [
      'Shopee', 'Tokopedia', 'Lazada', 'ZALORA', 'Bukalapak'
    ]
  
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-ninja-green/10 px-4 py-2 rounded-full mb-4">
              <span className="text-ninja-green font-semibold text-sm">✅ 2,000,000+ Bisnis</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ninja-dark mb-4">
              Dipercaya oleh lebih dari <span className="text-ninja-red">2,000,000</span> pemilik bisnis di Asia Tenggara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jika kamu berjualan di platform e-commerce, toko online, atau pelaku UMKM,  {/* ← Perbaiki "berjalan" → "berjualan" */}
              Ninja Xpress dengan senang hati akan mengurus pengiriman paket yang kamu miliki.  {/* ← Perbaiki deskripsi */}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-ninja-gray px-8 py-4 rounded-lg shadow-sm hover:shadow-md transition hover:scale-105"
              >
                <span className="text-xl font-bold text-ninja-dark">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }