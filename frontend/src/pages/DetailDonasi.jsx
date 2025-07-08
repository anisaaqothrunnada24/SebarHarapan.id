// DetailDonasi.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const DetailDonasi = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [campaign, setCampaign] = useState(null)

  useEffect(() => {
    const data = [
      {
        id: 1,
        judul: 'Bantu Korban Bencana Banjir Bandang',
        gambar: '/assets/banjirbandang.jpg',
        deskripsi:
          'Banjir bandang melanda wilayah kami. Banyak warga kehilangan rumah dan harta benda. Bantuan Anda sangat berarti untuk pemulihan.',
        kategori: 'Sarana Infrastruktur',
        lokasi: 'Garut, Jawa Barat',
        terkumpul: 673000,
        target: 10000000,
        sisaHari: 133,
      },
      {
        id: 2,
        judul: 'Tolong Bantu Anak Yatim Piatu Di Panti Asuhan',
        gambar: '/assets/anakyatim.jpg',
        deskripsi:
          'Yayasan kami menampung puluhan anak yatim piatu yang memerlukan makanan, pendidikan, dan kasih sayang. Mari bantu mereka.',
        kategori: 'Panti Sosial',
        lokasi: 'Bandung, Jawa Barat',
        terkumpul: 2821409,
        target: 6000000,
        sisaHari: 84,
      },
      {
        id: 3,
        judul: 'Bantuan Pendidikan Bagi Masyarakat Terpencil',
        gambar: '/assets/pendidikan.jpg',
        deskripsi:
          'Bantuan buku, seragam, dan alat tulis bagi anak-anak di daerah pelosok Indonesia agar tidak putus sekolah.',
        kategori: 'Pendidikan',
        lokasi: 'Papua',
        terkumpul: 295060,
        target: 3000000,
        sisaHari: 23,
      },
      {
        id: 4,
        judul: 'Donasi Untuk Saudara kita di Palestina',
        gambar: '/assets/palestina.jpg',
        deskripsi:
          'Mereka butuh bantuan pangan, medis, dan perlindungan di tengah konflik yang sedang berlangsung. Mari kita bantu saudara kita.',
        kategori: 'Panti Sosial',
        lokasi: 'Gaza, Palestina',
        terkumpul: 295060,
        target: 5000000,
        sisaHari: 23,
      },
    ]
    const selected = data.find((c) => c.id === parseInt(id))
    setCampaign(selected)
  }, [id])

  if (!campaign) return <p className="p-6">Memuat data...</p>

  const persen = Math.floor((campaign.terkumpul / campaign.target) * 100)

  return (
    <div className="min-h-screen pt-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow overflow-hidden">
          <img src={campaign.gambar} alt={campaign.judul} className="w-full h-96 object-cover rounded-b-lg" />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{campaign.judul}</h1>
            <div className="flex gap-4 text-sm text-gray-600 mb-2">
              <span>👁️ 2,905</span>
              <span>🏷️ {campaign.kategori}</span>
              <span>📍 {campaign.lokasi}</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{campaign.deskripsi}</p>
            <p className="text-xl font-semibold text-gray-800">Rp {campaign.terkumpul.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-2">Dari target Rp{campaign.target.toLocaleString()}</p>
            <p className="text-sm text-gray-500 mb-4">{campaign.sisaHari} Hari Lagi</p>
            <button
              onClick={() => navigate(`/donasi/${campaign.id}`)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded text-lg font-semibold"
            >
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailDonasi;
