import { Cpu, Globe, MapPin, Zap } from 'lucide-react'

export default function TechSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-ninja-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block bg-ninja-orange/10 px-4 py-2 rounded-full mb-4">
              <span className="text-ninja-orange font-semibold text-sm">⚡ Technology Driven</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-ninja-dark mb-6">
              Layanan pengiriman barang yang didukung <span className="text-ninja-orange">teknologi</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Ninja Xpress merupakan layanan pengiriman barang yang mencakup seluruh wilayah Indonesia. 
              Hadir sejak tahun 2015, kami terus berkomitmen untuk memberikan layanan yang solutif dan terpercaya.
            </p>
            <p className="text-gray-600 mb-8">
              Dilengkapi dengan sekitar 1000 hubs & stations di seluruh Indonesia, serta pengiriman sekitar 
              2.000.000 paket per hari.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <div className="bg-ninja-orange/10 p-3 rounded-full">
                  <Cpu className="w-6 h-6 text-ninja-orange" />
                </div>
                <span className="text-ninja-dark font-semibold">Technology Driven</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <div className="bg-ninja-orange/10 p-3 rounded-full">
                  <Globe className="w-6 h-6 text-ninja-orange" />
                </div>
                <span className="text-ninja-dark font-semibold">Coverage 99%</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <div className="bg-ninja-orange/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-ninja-orange" />
                </div>
                <span className="text-ninja-dark font-semibold">1000+ Hubs</span>
              </div>
              <div className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm">
                <div className="bg-ninja-orange/10 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-ninja-orange" />
                </div>
                <span className="text-ninja-dark font-semibold">Real-time Tracking</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-ninja-orange">
                <div className="text-4xl font-bold text-ninja-orange">2015</div>
                <p className="text-gray-600">Tahun Berdiri</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-ninja-yellow">
                <div className="text-4xl font-bold text-ninja-yellow">2M</div>
                <p className="text-gray-600">Paket/Hari</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-ninja-green col-span-2">
                <div className="text-4xl font-bold text-ninja-green">99%</div>
                <p className="text-gray-600">Cakupan Wilayah Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}