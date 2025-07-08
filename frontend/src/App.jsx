import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AdminDashboard from './pages/AdminDashboard'
import Navbar from './components/Navbar'
import PenyelenggaraDashboard from './pages/PenyelenggaraDashboard'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import PenyelenggaraPage from './pages/PenyelenggaraPage'
import DetailKampanye from './pages/DetailKampanye'
import DashboardDonasi from './pages/DashboardDonasi'
import FormDonasi from './pages/FormDOnasi'

function App() {
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/donasi" element={<DashboardDonasi />} />
        <Route path="/formdonasi/:id" element={<FormDonasi/>} />
        <Route path="/penyelenggara" element={<PenyelenggaraPage />} />
        <Route path="/kampanye/:id" element={<DetailKampanye />} />
        <Route path="/penyelenggara" element={<PenyelenggaraDashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
