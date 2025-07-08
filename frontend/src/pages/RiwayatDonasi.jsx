// RiwayatDonasi.jsx
import { useEffect, useState } from 'react'

const RiwayatDonasi = () => {
  const [riwayat, setRiwayat] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('riwayatDonasi')) || []
    setRiwayat(data)
  }, [])

  return (
    <div className="min-h-screen pt-24 px-6 bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">Riwayat Donasi Anda</h1>
      {riwayat.length === 0 ? (
        <p className="text-center text-gray-500">Belum ada donasi yang tercatat.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {riwayat.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm p-4 bg-gray-50 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{item.judul}</h2>
              <p className="text-sm text-gray-600 mb-1">Jumlah: <span className="font-medium text-green-600">Rp {Number(item.nominal).toLocaleString()}</span></p>
              {item.nama && (
                <p className="text-sm text-gray-600 mb-1">Nama: {item.nama}</p>
              )}
              {item.pesan && (
                <p className="text-sm text-gray-600 italic">"{item.pesan}"</p>
              )}
              <p className="text-xs text-gray-400 mt-2">Donasi ID: {item.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RiwayatDonasi
