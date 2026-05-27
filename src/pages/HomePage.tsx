import { Link } from 'react-router-dom'
import { locations } from '@/data/locations'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-tt-lavender">

      {/* Hero / Location picker */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

          {/* Decorative heading */}
          <p className="text-tt-teal text-sm font-semibold tracking-widest uppercase mb-2">
            Trusted In-Home Child Care
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-tt-coral mb-3 tracking-tight">
            Choose Your Location
          </h1>
          <p className="text-tt-muted text-sm max-w-md mx-auto mb-10">
            Select a city below to learn about local nanny and babysitting services, rates, and our dedicated local team.
          </p>

          {/* Location cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map(loc => (
              <Link key={loc.slug} to={`/${loc.slug}`}
                className="group block bg-white rounded-xl overflow-hidden border border-tt-lavender-mid hover:border-tt-teal hover:shadow-card-hover transition-all duration-200 shadow-card">
                <div className="relative h-40 overflow-hidden bg-tt-teal-light">
                  <img
                    src={loc.heroBanner}
                    alt={`${loc.city}, ${loc.state}`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=200&fit=crop' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
                <div className="p-4 text-left">
                  <p className="text-[11px] font-bold text-tt-teal uppercase tracking-wider mb-0.5">{loc.state}</p>
                  <h2 className="text-base font-bold text-tt-coral group-hover:text-tt-coral-dark transition-colors mb-1">{loc.city}</h2>
                  <p className="text-xs text-tt-muted leading-relaxed line-clamp-2">{loc.tagline}</p>
                  <p className="text-xs text-tt-teal font-semibold mt-2">{loc.phone}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise banner */}
      <div className="bg-tt-salmon">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <img src="https://twinkletoesnanny.com/img/seal-blue.png" alt="Trusted seal"
            className="h-12 w-auto brightness-0 invert opacity-80 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm">Interested in owning a franchise?</p>
            <a href="https://www.twinkletoesnannyfranchise.com" target="_blank" rel="noopener noreferrer"
              className="text-white/80 text-xs hover:text-white transition-colors underline underline-offset-2">
              Learn about the Twinkle Toes Nanny Franchise opportunity →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
