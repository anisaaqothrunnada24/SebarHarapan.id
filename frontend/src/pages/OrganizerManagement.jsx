import { useState } from 'react';

const OrganizerManagement = () => {
  const [organizers, setOrganizers] = useState([
    { id: 1, name: 'Yayasan Peduli Bangsa', email: 'peduli@yayasan.com', status: 'Terverifikasi' },
    { id: 2, name: 'Dompet Sosial', email: 'dompet@sosial.org', status: 'Belum Verifikasi' }
  ]);

  const handleVerify = (id) => {
    setOrganizers(
      organizers.map(org =>
        org.id === id ? { ...org, status: 'Terverifikasi' } : org
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Organizer Management</h2>
      <p className="text-gray-600 mb-4">Kelola data dan status verifikasi penyelenggara donasi.</p>

      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Nama</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {organizers.map((org) => (
            <tr key={org.id}>
              <td className="border px-4 py-2">{org.name}</td>
              <td className="border px-4 py-2">{org.email}</td>
              <td className="border px-4 py-2">{org.status}</td>
              <td className="border px-4 py-2">
                {org.status === 'Belum Verifikasi' && (
                  <button
                    onClick={() => handleVerify(org.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Verifikasi
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrganizerManagement;
