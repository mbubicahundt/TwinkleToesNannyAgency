import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import HomePage from '@/pages/HomePage'
import LocationPage from '@/pages/LocationPage'
import AboutPage from '@/pages/AboutPage'
import RatesPage from '@/pages/RatesPage'
import FAQsPage from '@/pages/FAQsPage'
import BecomeNannyPage from '@/pages/BecomeNannyPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/become-a-nanny" element={<BecomeNannyPage />} />
          <Route path="/:slug" element={<LocationPage />} />
        </Routes>
      </main>
    </div>
  )
}
