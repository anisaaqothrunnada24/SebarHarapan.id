import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/login', form);
      localStorage.setItem('token', res.data.token);
      const role = JSON.parse(atob(res.data.token.split('.')[1])).role;
      alert('Login berhasil!');
      if (role === 'admin') navigate('/admin');
      else if (role === 'penyelenggara') navigate('/penyelenggara');
      else navigate('/donasi');
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat login.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-5 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-green-600">SebarHarapan</h2>
        <p className="text-center text-sm text-gray-500">Masuk ke akun Anda</p>

        {error && <div className="text-red-600 text-sm text-center">{error}</div>}

        <div className="relative">
          <FiMail className="absolute top-3 left-3 text-gray-400" />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400 outline-none"
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <FiLock className="absolute top-3 left-3 text-gray-400" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="pl-10 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-400 outline-none"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 transition duration-200 text-white p-2 rounded font-semibold"
        >
          Masuk
        </button>

        <p className="text-center text-sm text-gray-500">
          Belum punya akun? <a href="/register" className="text-green-600 hover:underline">Daftar</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
