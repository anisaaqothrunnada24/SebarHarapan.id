// FormDonasi.jsx
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

// Simulasi database global (lokal) untuk menampung kampanye
const campaignData = [
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
]

const FormDonasi = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [campaign, setCampaign] = useState(null)
  const [nominal, setNominal] = useState('')
  const [nama, setNama] = useState('')
  const [sembunyikan, setSembunyikan] = useState(false)
  const [pesan, setPesan] = useState('')
  const [email, setEmail] = useState('')
  const [noHp, setNoHp] = useState('')
  const [donasiBerhasil, setDonasiBerhasil] = useState(false)

  const nominalPreset = [1000, 5000, 10000, 20000, 50000, 100000, 200000, 500000]

  useEffect(() => {
    const selected = campaignData.find((c) => c.id === parseInt(id))
    setCampaign({ ...selected })
  }, [id])

  const handleDonasi = () => {
    if (!nominal || nominal <= 0) return alert('Masukkan nominal valid')

    const updatedTotal = campaign.terkumpul + Number(nominal)
    setCampaign((prev) => ({ ...prev, terkumpul: updatedTotal }))
    setDonasiBerhasil(true)
  }

  if (!campaign) return <p className="p-6">Memuat data...</p>

  if (donasiBerhasil) {
    return (
      <div className="min-h-screen pt-24 px-4 md:px-8 bg-white text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Pembayaran Berhasil</h1>
        <p className="text-gray-700 text-lg mb-4">
          Donasi sebesar <span className="font-semibold">Rp {Number(nominal).toLocaleString()}</span> telah berhasil dikirim.
        </p>
        <p className="text-sm text-gray-600 mb-6">Terima kasih telah berdonasi dan membantu mereka yang membutuhkan. Semoga kebaikanmu dibalas berlipat.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/donasi')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Kembali ke Donasi
          </button>
          <button
            onClick={() => navigate('/riwayatdonasi')}
            className="bg-gray-100 border px-4 py-2 rounded hover:bg-gray-200"
          >
            Lihat Riwayat Donasi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 bg-white">
      <h1 className="text-center text-xl font-semibold mb-4">Kamu Akan Berdonasi</h1>

      <div className="max-w-xl mx-auto bg-gray-100 rounded-lg p-4 mb-6 flex gap-4">
        <img src={campaign.gambar} alt={campaign.judul} className="w-32 h-32 object-cover rounded" />
        <div>
          <h2 className="text-md font-bold line-clamp-2">{campaign.judul}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{campaign.deskripsi}</p>
          <div className="text-sm mt-2">
            <span className="font-semibold">Rp {campaign.terkumpul.toLocaleString()}</span> terkumpul <br />
            <span>{campaign.sisaHari} Hari Lagi</span>
          </div>
        </div>
      </div>

      <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow p-4 mb-4">
        <h3 className="text-sm font-semibold mb-2">Pilih Nominal Donasi</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {nominalPreset.map((n) => (
            <button
              key={n}
              onClick={() => setNominal(n)}
              className={`px-3 py-1 rounded border ${
                nominal === n ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
              }`}
            >
              Rp {n.toLocaleString()}
            </button>
          ))}
        </div>
        <input
          type="number"
          value={nominal}
          onChange={(e) => setNominal(Number(e.target.value))}
          placeholder="atau masukkan nominal lain"
          className="w-full border px-3 py-2 rounded"
        />
        <p className="text-xs text-gray-500 mt-2">
          Donasimu sudah termasuk 5% untuk operasional Yayasan. Kecuali untuk kategori bencana alam.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow p-4 mb-4">
        <h3 className="text-sm font-semibold mb-2">Data Donatur</h3>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama (Opsional)"
          className="w-full border px-3 py-2 rounded mb-2"
        />
        <label className="text-sm flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={sembunyikan}
            onChange={() => setSembunyikan(!sembunyikan)}
          />
          Sembunyikan nama saya (Donasi anonim)
        </label>
        <textarea
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Memberikan Pesan (Opsional)"
          rows={3}
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        <p className="text-xs text-gray-500 mt-2">
          Nama dan Pesan akan ditampilkan di halaman donasi kampanye. Jika tidak ingin menyertakan, Anda bisa centang "sembunyikan nama" atau kosongkan.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow p-4 mb-4">
        <h3 className="text-sm font-semibold mb-2">Data Tambahan</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email (Opsional)"
          className="w-full border px-3 py-2 rounded mb-2"
        />
        <input
          type="tel"
          value={noHp}
          onChange={(e) => setNoHp(e.target.value)}
          placeholder="No Handphone"
          className="w-full border px-3 py-2 rounded"
        />
        <p className="text-xs text-gray-500 mt-2">
          Nomor HP dan email digunakan untuk notifikasi terkait donasi ini dan tidak dipublikasikan.
        </p>
      </div>

      <div className="max-w-xl mx-auto bg-gray-50 rounded-lg shadow p-4 mb-6">
        <h3 className="text-sm font-semibold mb-2">Pilih Metode Pembayaran</h3>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-sm">QRIS</span>
          <img src="/assets/qris-logo.png" alt="QRIS" className="h-6" />
        </div>
      </div>

      <div className="max-w-xl mx-auto">
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded font-semibold"
          onClick={handleDonasi}
        >
          Bayar Sekarang ➜
        </button>
      </div>
    </div>
  )
}

export default FormDonasi;
