// import { ArrowRight, Package, MapPin, Clock, Shield } from 'lucide-react'
// import Link from 'next/link'

// export default function Hero() {
//   return (
//     <section className="pt-32 pb-20 bg-gradient-to-br from-ninja-red via-ninja-red-dark to-ninja-red text-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           {/* Left Side */}
//           <div className="lg:w-1/2 mb-10 lg:mb-0">
//             {/* Badge */}
//             <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
//               <span className="text-sm font-semibold flex items-center gap-2">
//                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//                 #1 Logistik di Indonesia
//               </span>
//             </div>
            
//             {/* Title */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//               Layanan pengiriman barang yang <br />
//               <span className="text-yellow-300">Siap Bantu Sampai Tujuan</span>
//             </h1>
            
//             {/* Description */}
//             <p className="text-lg md:text-xl mb-8 opacity-90">
//               Kami berdedikasi untuk selalu memberikan solusi, kemudahan dan ketepatan 
//               dengan menyediakan berbagai layanan pengiriman barang sesuai kebutuhan bisnis kamu.
//             </p>
            
//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link href="/lacak-kiriman">
//                 <button className="bg-white text-ninja-red px-8 py-3 rounded-full font-semibold hover:shadow-xl transition flex items-center justify-center w-full sm:w-auto group">
//                   Lacak Kiriman
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
//                 </button>
//               </Link>
//               <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-ninja-red transition w-full sm:w-auto">
//                 Perkiraan Harga
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Stats */}
//           <div className="lg:w-1/2">
//             <div className="grid grid-cols-2 gap-4">
//               {/* Card 1 */}
//               <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl hover:bg-white/25 transition group cursor-pointer">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Package className="w-5 h-5 text-yellow-300" />
//                   <div className="text-3xl font-bold text-yellow-300">120M+</div>
//                 </div>
//                 <div className="text-sm opacity-90">Orang telah menggunakan layanan kami</div>
//               </div>
              
//               {/* Card 2 */}
//               <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl hover:bg-white/25 transition group cursor-pointer">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Clock className="w-5 h-5 text-yellow-300" />
//                   <div className="text-3xl font-bold text-yellow-300">2M</div>
//                 </div>
//                 <div className="text-sm opacity-90">Paket terkirim setiap hari</div>
//               </div>
              
//               {/* Card 3 - Full width */}
//               <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl col-span-2 hover:bg-white/25 transition group cursor-pointer">
//                 <div className="flex items-center gap-2 mb-2">
//                   <MapPin className="w-5 h-5 text-yellow-300" />
//                   <div className="text-3xl font-bold text-yellow-300">99%</div>
//                 </div>
//                 <div className="text-sm opacity-90">Mencakup wilayah Indonesia</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }