import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-ninja-dark text-white py-8 sm:py-12 border-t-4 border-ninja-red">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
          {/* Kolom 1 */}
          <div>
            <h4 className="font-bold mb-2 sm:mb-4 text-ninja-red text-sm sm:text-base">Bantuan Penerima Paket</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-ninja-red transition">Tracking</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Temukan Mitra Ninja</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Ninja Doors</a></li>
            </ul>
          </div>
          
          {/* Kolom 2 */}
          <div>
            <h4 className="font-bold mb-2 sm:mb-4 text-ninja-red text-sm sm:text-base">Bantuan Pengirim</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-ninja-red transition">Jadi Mitra Ninja</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Daftar jadi Kurir</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Blog</a></li>
            </ul>
          </div>
          
          {/* Kolom 3 */}
          <div>
            <h4 className="font-bold mb-2 sm:mb-4 text-ninja-red text-sm sm:text-base">Perusahaan</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-300">
              <li><a href="#" className="hover:text-ninja-red transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Karir</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Kontak</a></li>
            </ul>
          </div>
          
          {/* Kolom 4 - Sosial Media */}
          <div>
            <h4 className="font-bold mb-2 sm:mb-4 text-ninja-red text-sm sm:text-base">Ikuti Kami</h4>
            <div className="flex space-x-2 sm:space-x-3">
              <a href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-ninja-red transition">
                <FaFacebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-ninja-red transition">
                <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a href="#" className="bg-white/10 p-1.5 sm:p-2 rounded-full hover:bg-ninja-red transition">
                <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
            
            <div className="mt-3 sm:mt-4">
              <h4 className="font-bold mb-1.5 sm:mb-2 text-ninja-red text-sm sm:text-base">Berlangganan NinjaChat</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-l-full text-ninja-dark text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-ninja-red min-w-0"
                />
                <button className="bg-ninja-red px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-r-full hover:bg-ninja-red-dark transition flex-shrink-0">
                  <MdEmail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2026 Ninja Xpress. All rights reserved. Indonesia</p>
        </div>
      </div>
    </footer>
  )
}