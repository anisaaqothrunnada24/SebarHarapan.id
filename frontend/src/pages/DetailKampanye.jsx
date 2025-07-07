import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'

const DetailKampanye = () => {
  const { id } = useParams() 

  
  const campaign = {
    id: 1,
    judul: 'Bantu Korban Banjir',
    deskripsi: 'Banjir besar melanda beberapa wilayah dan menyebabkan ribuan warga kehilangan tempat tinggal. Bantuan Anda sangat berarti.',
    target: 50000000,
    terkumpul: 21000000,
    gambar: '/img/banjir.jpg',
  }

  const persen = Math.floor((campaign.terkumpul / campaign.target) * 100)

  return (
    <>
      <Navbar />
      <div className="pt-24 px-4 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src={campaign.gambar} alt={campaign.judul} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{campaign.judul}</h1>
            <p className="text-gray-700 mb-4">{campaign.deskripsi}</p>

            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Terkumpul: Rp{campaign.terkumpul.toLocaleString()}</span>
                <span>Target: Rp{campaign.target.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded mt-1">
                <div className="bg-orange-500 h-4 rounded" style={{ width: `${persen}%` }}></div>
              </div>
              <p className="text-right text-sm text-orange-600 mt-1">{persen}% tercapai</p>
            </div>

            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
              Donasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailKampanye
