import { Routes, Route, } from 'react-router';
import HomePage from './pages/home/HomePage';
import ServicesPage from './pages/services/ServicesPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/:id" element={<ServicesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

export default App
