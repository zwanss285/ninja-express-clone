import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-ninja-dark text-white py-12 border-t-4 border-ninja-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4 text-ninja-red">Bantuan Penerima Paket</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-ninja-red transition">Tracking</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Temukan Mitra Ninja</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Ninja Doors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-ninja-red">Bantuan Pengirim</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-ninja-red transition">Jadi Mitra Ninja</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Daftar jadi Kurir</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-ninja-red">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-ninja-red transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Karir</a></li>
              <li><a href="#" className="hover:text-ninja-red transition">Kontak</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-ninja-red">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ninja-red transition">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ninja-red transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-ninja-red transition">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-4">
              <h4 className="font-bold mb-2 text-ninja-red">Berlangganan NinjaChat</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="flex-1 px-4 py-2 rounded-l-full text-ninja-dark focus:outline-none focus:ring-2 focus:ring-ninja-red"
                />
                <button className="bg-ninja-red px-4 py-2 rounded-r-full hover:bg-ninja-red-dark transition">
                  <MdEmail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Ninja Xpress. All rights reserved. Indonesia</p>
        </div>
      </div>
    </footer>
  )
}