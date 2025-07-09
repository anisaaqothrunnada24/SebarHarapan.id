import { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Dhiya Ulhaq', email: 'dhiya@example.com', role: 'Admin' },
    { id: 2, name: 'Abiyyu', email: 'abiyyu@example.com', role: 'Donatur' }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', email: '', role: '' });

  const handleAdd = () => {
    setFormData({ id: null, name: '', email: '', role: '' });
    setShowModal(true);
  };

  const handleEdit = (user) => {
    setFormData(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (confirm('Yakin ingin menghapus user ini?')) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      setUsers(users.map(u => (u.id === formData.id ? formData : u)));
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <p className="text-gray-600 mb-4">Daftar dan kontrol pengguna yang terdaftar di aplikasi.</p>
      <button
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleAdd}
      >
        Tambah User
      </button>

      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.role}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
                  onClick={() => handleDelete(user.id)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h3 className="text-lg font-semibold mb-4">{formData.id ? 'Edit User' : 'Tambah User'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm">Nama:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm">Email:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block text-sm">Role:</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  required
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value="">-- Pilih Role --</option>
                  <option value="Admin">Admin</option>
                  <option value="Donatur">Donatur</option>
                  <option value="Penyelenggara">Penyelenggara</option>
                </select>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
