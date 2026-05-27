import { Link } from 'react-router-dom'
import Footer from '@/components/layout/Footer'

const values = [
  { title: 'Pediatrician Recommended', body: "We are the only nanny agency in the country formally recommended by pediatricians — because child development experts trust our standards." },
  { title: 'No Placement Fees. Ever.', body: "Other agencies charge hundreds to thousands of dollars to match you with a nanny. We charge nothing. You only pay for the hours you use." },
  { title: 'Screened Beyond Industry Standards', body: "Every nanny passes national and county-level background checks, CPR certification, personal interviews, and reference verification before they ever meet your family." },
  { title: 'Consistency You Can Count On', body: "We work hard to match you with nannies who fit your family's schedule and personality — building the kind of long-term relationships that make a real difference." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-tt-lavender">

      {/* Hero */}
      <div className="bg-white border-b border-tt-lavender-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="text-tt-teal text-sm font-semibold tracking-widest uppercase mb-2">Our Story</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-tt-coral mb-4">About Twinkle Toes</h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            Founded in 2013, Twinkle Toes Nanny Agency was built on a single belief: every family deserves
            access to high-quality, affordable, and trustworthy in-home childcare — without hidden fees or uncertainty.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Founder story */}
        <section className="bg-white rounded-xl shadow-card p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src="https://twinkletoesnanny.com/img/kristy.jpg"
              alt="Kristy Bickmeyer, Founder"
              className="w-40 h-40 rounded-full object-cover border-4 border-tt-teal-light flex-shrink-0 mx-auto md:mx-0"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <div>
              <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-1">Meet the Founder</p>
              <h2 className="text-2xl font-bold text-tt-coral mb-3">Kristy Bickmeyer</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                As a mother and entrepreneur, Kristy saw firsthand how hard it was for families to find reliable,
                affordable childcare without the stress of placement agencies that charged thousands of dollars upfront
                with no guarantees.
              </p>
              <p className="text-gray-600 leading-relaxed">
                She founded Twinkle Toes in Gainesville, FL in 2013 with a radically different model — no placement fees,
                no membership fees, no contracts. Just excellent nannies, a transparent hourly rate, and a team that
                treats your family like their own. Today Twinkle Toes operates in over 20 cities nationwide and is
                the only nanny agency formally recommended by pediatricians.
              </p>
            </div>
          </div>
        </section>

        {/* Values grid */}
        <section>
          <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-2 text-center">What Sets Us Apart</p>
          <h2 className="text-2xl font-bold text-tt-coral mb-8 text-center">The Twinkle Toes Difference</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-xl shadow-card p-6 border border-tt-lavender-mid">
                <div className="w-8 h-1 bg-tt-teal rounded mb-3" />
                <h3 className="font-bold text-tt-coral mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Franchise CTA */}
        <section className="bg-tt-salmon rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Interested in Owning a Franchise?</h2>
          <p className="text-white/80 text-sm mb-5 max-w-lg mx-auto">
            Join a growing network of locally-owned Twinkle Toes agencies across the country.
            Low overhead, high demand, and a proven model.
          </p>
          <a href="https://www.twinkletoesnannyfranchise.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-tt-salmon font-bold px-6 py-2.5 rounded-lg hover:bg-tt-coral-light transition-colors text-sm">
            Learn About Franchising →
          </a>
        </section>

        {/* Locations link */}
        <section className="text-center">
          <h2 className="text-xl font-bold text-tt-coral mb-2">Find Your Local Twinkle Toes</h2>
          <p className="text-gray-500 text-sm mb-5">We serve families in 12 cities — and growing.</p>
          <Link to="/"
            className="inline-flex items-center bg-tt-teal hover:bg-tt-teal-dark text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
            View All Locations →
          </Link>
        </section>

      </div>

      <Footer />
    </div>
  )
}
