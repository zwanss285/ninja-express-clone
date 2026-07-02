'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

export default function Breadcrumb() {
  const pathname = usePathname()
  
  if (pathname === '/') return null

  const paths = pathname.split('/').filter(path => path)
  
  const pathNames: { [key: string]: string } = {
    'program-promo': 'Program & Promo',
    'ninja-b2br': 'Ninja B2BR',
    'lacak-kiriman': 'Lacak Kiriman',
    'bantuan': 'Bantuan',
  }

  return (
    <nav className="bg-white py-3 px-4 text-sm border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center gap-2">
          <Link 
            href="/" 
            className="flex items-center gap-1 text-ninja-dark hover:text-ninja-red transition"
          >
            <Home className="w-4 h-4" />
            <span>Beranda</span>
          </Link>
          
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1
            const href = '/' + paths.slice(0, index + 1).join('/')
            const label = pathNames[path] || path
            
            return (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast ? (
                  <span className="text-ninja-red font-semibold">{label}</span>
                ) : (
                  <Link href={href} className="text-gray-600 hover:text-ninja-red transition">
                    {label}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}