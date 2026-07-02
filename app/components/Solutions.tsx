interface Solution {
    title: string
    description: string
    icon: string
    color: string
    bgColor: string
  }
  
  const solutions: Solution[] = [
    {
      title: 'Untuk UKM',
      description: 'Pelaku bisnis online dan offline di seluruh Indonesia yang berjualan melalui sosial media.',
      icon: '🏪',
      color: 'text-ninja-blue',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Untuk Penjual Online',
      description: 'Pelaku bisnis yang berjualan berbagai jenis produk di berbagai platform online.',
      icon: '🛍️',
      color: 'text-ninja-green',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Untuk Perusahaan',
      description: 'Perusahaan yang memiliki kebutuhan kustomisasi pengiriman hingga pergudangan.',
      icon: '🏢',
      color: 'text-ninja-orange',
      bgColor: 'bg-orange-50'
    }
  ]
  
  export default function Solutions() {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ninja-dark mb-4">
              Solusi pengiriman logistik untuk bisnis kamu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ninja Xpress memberikan layanan pengiriman barang ke seluruh Indonesia untuk berbagai jenis bisnis yang kamu miliki.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className={`${solution.bgColor} p-8 rounded-xl shadow-sm hover:shadow-lg transition group`}>
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className={`text-xl font-bold ${solution.color} mb-3`}>{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <a href="#" className="text-ninja-orange font-semibold hover:underline inline-flex items-center">
                  Baca selengkapnya
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