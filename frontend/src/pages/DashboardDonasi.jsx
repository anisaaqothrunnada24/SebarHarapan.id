// DashboardDonasi.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFilter } from 'react-icons/fa'

const DashboardDonasi = () => {
  const [campaigns, setCampaigns] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // Simulasi data fetch dari backend
    setCampaigns([
      {
        id: 1,
        judul: 'Bantu Korban Bencana Banjir Bandang',
        gambar: '/assets/banjirbandang.jpg',
        kategori: 'Sarana Infrastruktur',
        penggalang: 'Erwin',
        terkumpul: 673000,
        hariTersisa: 133,
      },
      {
        id: 2,
        judul: 'Tolong Bantu Anak Yatim Piatu Di Panti Asuhan',
        gambar: '/assets/anakyatim.jpg', 
        kategori: 'Panti Sosial',
        penggalang: 'Yayasan Kasih Abadi',
        terkumpul: 2821409,
        hariTersisa: 84,
      },
      {
        id: 3,
        judul: 'Bantuan Pendidikan Bagi Masyarakat Terpencil',
        gambar: '/assets/pendidikan.jpg', 
        kategori: 'Pendidikan',
        penggalang: 'Agus',
        terkumpul: 295060,
        hariTersisa: 23,
      },
      {
        id: 4,
        judul: 'Donasi Untuk Saudara kita di Palestina',
        gambar: '/assets/palestina.jpg', 
        kategori: 'Panti Sosial',
        penggalang: 'Hamba Allah',
        terkumpul: 295060,
        hariTersisa: 23,
      },
    ])
  }, [])

  return (
    <div className="min-h-screen bg-white px-6 pt-20">
      <h2 className="text-center text-blue-600 text-sm font-semibold">Bantu Mereka</h2>
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">Donasi Sekarang</h1>
      <p className="text-center text-gray-600 mb-6">Mereka membutuhkan uluran tangan kita untuk menghadapi kenyataan hidup yang tak selalu mudah. Di balik senyum yang mereka tunjukkan, tersimpan harapan besar akan masa depan yang lebih baik. Sedikit bantuan dari kita mungkin tampak sederhana, tetapi bagi mereka, itu bisa menjadi titik terang, penyemangat, dan awal dari perubahan besar dalam hidup mereka.</p>

      <div className="flex justify-end mb-4">
        <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full text-sm flex items-center gap-2">
          <FaFilter /> URUTKAN
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {campaigns.map((c) => (
          <div
            key={c.id}
            className="bg-white border shadow rounded-xl overflow-hidden hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`/formdonasi/${c.id}`)}
          >
            <div className="relative">
              <img src={c.gambar} alt={c.judul} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                {c.kategori}
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-md font-bold mb-1 line-clamp-2">{c.judul}</h3>
              <p className="text-sm text-gray-600 mb-2">Rp {c.terkumpul.toLocaleString()} <span className="text-gray-400">Terkumpul</span></p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{c.hariTersisa} Hari Lagi</span>
                <span>{c.penggalang}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardDonasi;
