import { useState } from 'react'

const PenyelenggaraPage = () => {
  const [judul, setJudul] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [target, setTarget] = useState('')
  const [gambar, setGambar] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Campaign "${judul}" berhasil dibuat dengan target Rp${target}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Buat Campaign Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul Campaign"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            placeholder="Deskripsi Campaign"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full border p-2 rounded"
            rows={4}
            required
          />

          <input
            type="number"
            placeholder="Target Donasi (Rp)"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setGambar(e.target.files[0])}
            className="w-full"
          />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Buat Campaign
          </button>
        </form>
      </div>
    </div>
  )
}

export default PenyelenggaraPage
