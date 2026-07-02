import { Package, Snowflake, Ship, Truck, Globe, Users } from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
  link: string
  badge?: string
}

const services: Service[] = [
  {
    icon: Package,
    title: 'Ninja Regular',
    description: 'Kirim paket dalam jangka waktu 1-3 hari kerja* dengan layanan Ninja Regular, Same-day atau Cargo.',
    link: '#',
    badge: 'Populer'
  },
  {
    icon: Snowflake,
    title: 'Pengiriman Beku',
    description: 'Solusi pengiriman produk frozen yang hemat biaya dan ramah lingkungan.',
    link: '#',
    badge: 'Frozen'
  },
  {
    icon: Ship,
    title: 'Freight Forwarding',
    description: 'Layanan pendukung untuk impor dan ekspor barang dengan 3 moda transportasi: darat, laut, dan udara.',
    link: '#'
  },
  {
    icon: Truck,
    title: 'B2BR Supply Chain Management',
    description: 'Layanan Supply Chain Management B2BR yang praktis dan ekonomis untuk UMKM sampai Corporate.',
    link: '#'
  },
  {
    icon: Globe,
    title: 'Cross Border',
    description: 'Layanan pendukung untuk kirim paket dari Indonesia ke Malaysia dan Singapura.',
    link: '#'
  },
  {
    icon: Users,
    title: 'Jadi Mitra Ninja',
    description: 'Dapatkan sumber penghasilan baru dengan bergabung dalam jaringan Mitra Ninja kami.',
    link: '#',
    badge: 'Eksklusif'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-ninja-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-ninja-dark mb-4">
            Layanan Utama
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Solusi pengiriman logistik untuk bisnis kamu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-ninja-red"
            >
              {service.badge && (
                <span className="inline-block bg-ninja-red/10 text-ninja-red text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {service.badge}
                </span>
              )}
              <div className="bg-ninja-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-ninja-red transition-all duration-300">
                <service.icon className="w-8 h-8 text-ninja-red group-hover:text-white transition-all duration-300" />
              </div>
              <h3 className="text-xl font-bold text-ninja-dark mb-3 group-hover:text-ninja-red transition">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="text-ninja-red font-semibold hover:underline inline-flex items-center">
                Pelajari lebih lanjut
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}