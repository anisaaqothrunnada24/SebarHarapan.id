// components/Navbar.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          SebarHarapan.id
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-orange-500">Beranda</Link>
          <Link to="/donasi" className="text-gray-700 hover:text-orange-500">Donasi</Link>
          <Link to="/penyelenggara" className="text-gray-700 hover:text-orange-500">Penyelenggara</Link>
          <Link to="/admin" className="text-gray-700 hover:text-orange-500">Admin</Link>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-orange-500">Beranda</Link>
          <Link to="/donasi" className="block text-gray-700 hover:text-orange-500">Donasi</Link>
          <Link to="/penyelenggara" className="block text-gray-700 hover:text-orange-500">Penyelenggara</Link>
          <Link to="/admin" className="block text-gray-700 hover:text-orange-500">Admin</Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
