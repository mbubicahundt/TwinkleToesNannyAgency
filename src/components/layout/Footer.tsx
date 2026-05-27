import { Link } from 'react-router-dom'
import type { Location } from '@/types/location'
import { locations } from '@/data/locations'

interface FooterProps { location?: Location }

export default function Footer({ location }: FooterProps) {
  const quickLinks = ['About Us','Rates & Services','Become a Nanny','FAQs','Blog','Contact Us']
  const demo = (e: React.MouseEvent) => { e.preventDefault(); alert('Demo only — available in the full build.') }

  return (
    <footer>
      {/* Stay Connected / main footer — salmon background */}
      <div className="bg-tt-salmon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <img src="https://twinkletoesnanny.com/img/logo-twinkletoes.png"
                alt="Twinkle Toes Nanny Agency" className="h-10 w-auto mb-4 brightness-0 invert" />
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                In-home child care that is high quality, affordable, consistent, and hassle free.
                The only pediatrician-recommended nanny agency.
              </p>
              <img src="https://twinkletoesnanny.com/img/seal-blue.png"
                alt="Trusted Nanny Agency Seal" className="h-14 w-auto brightness-0 invert opacity-70" />
            </div>

            {/* Location or locations list */}
            {location ? (
              <div>
                <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest opacity-75">
                  {location.city} Office
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="text-white/75">{location.owner}, Owner</li>
                  <li><a href={`tel:${location.phone.replace(/\./g,'')}`}
                    className="text-white/75 hover:text-white transition-colors">{location.phone}</a></li>
                  <li><a href={`mailto:${location.email}`}
                    className="text-white/75 hover:text-white transition-colors">{location.email}</a></li>
                </ul>
                <div className="flex gap-3 mt-5">
                  {[['Facebook', location.facebook],['Instagram', location.instagram]].map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white transition-colors border border-white/25 rounded-lg px-3 py-1.5 hover:border-white/50">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest opacity-75">Our Locations</h3>
                <ul className="space-y-2 text-sm">
                  {locations.map(l => (
                    <li key={l.slug}>
                      <Link to={`/${l.slug}`} className="text-white/75 hover:text-white transition-colors">
                        {l.city}, {l.state}
                      </Link>
                    </li>
                  ))}
                  <li className="text-white/40 text-xs pt-1">+ 18 more locations nationwide</li>
                </ul>
              </div>
            )}

            {/* Quick links */}
            <div>
              <h3 className="font-semibold text-white mb-4 text-xs uppercase tracking-widest opacity-75">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {quickLinks.map(label => (
                  <li key={label}>
                    <a href="#" onClick={demo} className="text-white/75 hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-white/50 text-xs mb-2">Interested in franchising?</p>
                <a href="https://www.twinkletoesnannyfranchise.com" target="_blank" rel="noopener noreferrer"
                  className="text-white font-semibold text-sm hover:text-white/80 transition-colors">
                  Own a Franchise →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-tt-salmon-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>© 2026 Twinkle Toes Nanny Agency · All Rights Reserved</span>
          <a href="https://twinkletoesnanny.com/privacy-policy" target="_blank" rel="noopener noreferrer"
            className="hover:text-white/80 transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
