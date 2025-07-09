import { useState } from 'react';

const ReportManagement = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      campaign: 'Bantu Korban Banjir',
      organizer: 'Dompet Sosial',
      totalDonasi: 25000000
    },
    {
      id: 2,
      campaign: 'Paket Sembako Ramadhan',
      organizer: 'Yayasan Peduli Bangsa',
      totalDonasi: 10000000
    }
  ]);

  const formatRupiah = (value) => {
    return `Rp ${value.toLocaleString('id-ID')}`;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Report Management</h2>
      <p className="text-gray-600 mb-4">Laporan donasi dari semua kampanye aktif.</p>

      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Kampanye</th>
            <th className="border px-4 py-2">Penyelenggara</th>
            <th className="border px-4 py-2">Total Donasi</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((rpt) => (
            <tr key={rpt.id}>
              <td className="border px-4 py-2">{rpt.campaign}</td>
              <td className="border px-4 py-2">{rpt.organizer}</td>
              <td className="border px-4 py-2">{formatRupiah(rpt.totalDonasi)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportManagement;
