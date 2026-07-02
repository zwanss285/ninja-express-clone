import { Users, Package, MapPin, Building } from 'lucide-react'

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-ninja-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ninja-red transition">
              <Users className="w-8 h-8 text-ninja-red group-hover:text-white transition" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-ninja-red">120M+</div>
            <p className="text-ninja-dark mt-2 font-medium">Pengguna</p>
          </div>
          <div className="text-center group">
            <div className="bg-ninja-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ninja-red transition">
              <Package className="w-8 h-8 text-ninja-red group-hover:text-white transition" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-ninja-red">2M</div>
            <p className="text-ninja-dark mt-2 font-medium">Paket/Hari</p>
          </div>
          <div className="text-center group">
            <div className="bg-ninja-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ninja-red transition">
              <MapPin className="w-8 h-8 text-ninja-red group-hover:text-white transition" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-ninja-red">99%</div>
            <p className="text-ninja-dark mt-2 font-medium">Cakupan Wilayah</p>
          </div>
          <div className="text-center group">
            <div className="bg-ninja-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ninja-red transition">
              <Building className="w-8 h-8 text-ninja-red group-hover:text-white transition" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-ninja-red">1000+</div>
            <p className="text-ninja-dark mt-2 font-medium">Hubs & Stations</p>
          </div>
        </div>
      </div>
    </section>
  )
}