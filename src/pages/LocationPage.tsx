import { Link, useParams, Navigate } from 'react-router-dom'
import { MapPin, Phone, Mail, CheckCircle, ChevronRight } from 'lucide-react'
import { locations } from '@/data/locations'
import Footer from '@/components/layout/Footer'

const demo = (e: React.MouseEvent) => { e.preventDefault(); alert('Available in the full build.') }

export default function LocationPage() {
  const { slug } = useParams<{ slug: string }>()
  const loc = locations.find(l => l.slug === slug)
  if (!loc) return <Navigate to="/" replace />
  const others = locations.filter(l => l.slug !== slug)

  return (
    <div className="bg-tt-lavender min-h-screen">

      {/* Full-width hero banner */}
      <div className="w-full overflow-hidden" style={{ maxHeight: '420px' }}>
        <img
          src={loc.heroBanner}
          alt={`${loc.city} nanny agency`}
          className="w-full object-cover object-center"
          style={{ maxHeight: '420px', width: '100%' }}
          onError={e => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&h=420&fit=crop' }}
        />
      </div>

      {/* Page content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-6">
          <Link to="/" className="hover:text-tt-teal transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 font-medium">{loc.city}, {loc.state}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">

          {/* Main content — white card */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-card p-6 sm:p-8">

            <h1 className="text-2xl sm:text-3xl font-bold text-tt-coral mb-1 tracking-tight">
              {loc.city} Nanny Agency
            </h1>
            <p className="text-tt-teal font-semibold text-sm mb-6">{loc.tagline}</p>

            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed mb-8">
              <p>{loc.description}</p>
            </div>

            {/* Services */}
            <section id="services" className="mb-8">
              <h2 className="text-lg font-bold text-tt-coral mb-4 pb-2 border-b border-tt-lavender-mid">
                Our {loc.city} Nanny Services Include
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2">
                {loc.services.map(s => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-tt-teal flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </section>

            {/* Why choose */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-tt-coral mb-4 pb-2 border-b border-tt-lavender-mid">
                Why Families Choose Twinkle Toes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {loc.features.map(f => (
                  <div key={f} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-tt-teal flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Areas served */}
            <section className="mb-8">
              <h2 className="text-lg font-bold text-tt-coral mb-4 pb-2 border-b border-tt-lavender-mid">
                We Proudly Serve Families Throughout
              </h2>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-1.5">
                {loc.areas.map(a => (
                  <li key={a} className="flex items-center gap-1.5 text-sm text-gray-700">
                    <MapPin className="w-3 h-3 text-tt-teal flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact info block */}
            <section className="bg-tt-teal-light rounded-lg p-5 border border-tt-teal/20">
              <h2 className="text-base font-bold text-tt-coral mb-3">
                Find a {loc.city} Nanny or Babysitter Today
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Contact Twinkle Toes Nanny Agency {loc.city} to learn more about our trusted nanny and babysitting services.
              </p>
              <div className="space-y-1.5 text-sm">
                <a href={`tel:${loc.phone.replace(/\./g,'')}`}
                  className="flex items-center gap-2 text-tt-teal hover:text-tt-teal-dark font-medium transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  {loc.phone}
                </a>
                <a href={`mailto:${loc.email}`}
                  className="flex items-center gap-2 text-tt-teal hover:text-tt-teal-dark font-medium transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                  {loc.email}
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-5">

              {/* Contact / CTA card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-card border border-tt-lavender-mid">
                <div className="bg-tt-teal px-5 py-4">
                  <h3 className="font-bold text-white text-base">{loc.city} Office</h3>
                  <p className="text-white/70 text-xs mt-0.5">{loc.owner}, Owner</p>
                </div>
                <div className="bg-white px-5 py-4 space-y-3">
                  <a href={`tel:${loc.phone.replace(/\./g,'')}`}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-tt-teal transition-colors">
                    <Phone className="w-3.5 h-3.5 text-tt-teal flex-shrink-0" />
                    {loc.phone}
                  </a>
                  <a href={`mailto:${loc.email}`}
                    className="flex items-center gap-2 text-sm text-gray-700 hover:text-tt-teal transition-colors">
                    <Mail className="w-3.5 h-3.5 text-tt-teal flex-shrink-0" />
                    <span className="break-all">{loc.email}</span>
                  </a>
                  <a href={loc.calendlyUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-tt-teal hover:bg-tt-teal-dark text-white font-bold text-sm py-2.5 px-4 rounded-lg transition-colors mt-2">
                    Request Consultation
                  </a>
                  <div className="flex gap-2">
                    <a href={loc.facebook} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center text-xs text-gray-500 hover:text-tt-teal border border-gray-200 rounded py-1.5 hover:border-tt-teal transition-colors font-medium">
                      Facebook
                    </a>
                    <a href={loc.instagram} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-center text-xs text-gray-500 hover:text-tt-teal border border-gray-200 rounded py-1.5 hover:border-tt-teal transition-colors font-medium">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="bg-white rounded-xl overflow-hidden shadow-card border border-tt-lavender-mid">
                <div className="bg-tt-lavender px-5 py-3 border-b border-tt-lavender-mid">
                  <h4 className="text-xs font-semibold text-tt-coral uppercase tracking-wider">Quick Links</h4>
                </div>
                <div className="bg-white px-5 py-3 space-y-1">
                  {[['Nanny Services', null],['Rates', null],['About Us', null],['FAQs', null]].map(([label]) => (
                    <a key={label as string} href="#" onClick={demo}
                      className="flex items-center gap-2 py-1.5 text-sm text-tt-teal hover:text-tt-teal-dark font-medium transition-colors">
                      <ChevronRight className="w-3 h-3" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Other locations */}
              <div className="bg-white rounded-xl overflow-hidden shadow-card border border-tt-lavender-mid">
                <div className="bg-tt-lavender px-5 py-3 border-b border-tt-lavender-mid">
                  <h4 className="text-xs font-semibold text-tt-coral uppercase tracking-wider">Other Locations</h4>
                </div>
                <div className="bg-white px-5 py-2">
                  {others.map(o => (
                    <Link key={o.slug} to={`/${o.slug}`}
                      className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-tt-teal transition-colors border-b border-tt-lavender last:border-0">
                      <span>{o.city}, {o.state}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Seal */}
              <div className="text-center">
                <img src="https://twinkletoesnanny.com/img/seal-blue.png" alt="Trusted Agency Seal"
                  className="h-16 w-auto mx-auto" />
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer location={loc} />
    </div>
  )
}
