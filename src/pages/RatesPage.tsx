import Footer from '@/components/layout/Footer'
import { CheckCircle } from 'lucide-react'

const demo = (e: React.MouseEvent) => { e.preventDefault(); alert('Contact your local Twinkle Toes office for exact rates in your area.') }

const plans = [
  {
    name: 'Date Night / Occasional',
    price: 'From $22',
    unit: 'per hour',
    color: 'border-tt-teal',
    badge: null,
    features: [
      'Minimum 3-hour booking',
      'Available evenings & weekends',
      'CPR-certified sitter',
      'No advance commitment required',
      'Book with as little as 24 hrs notice',
    ],
  },
  {
    name: 'Regular Part-Time',
    price: 'From $20',
    unit: 'per hour',
    color: 'border-tt-coral',
    badge: 'Most Popular',
    features: [
      'Consistent weekly schedule',
      'Same nanny every visit',
      'Morning, afternoon, or evening slots',
      'CPR-certified & background-checked',
      'Seamless substitute coverage',
    ],
  },
  {
    name: 'Full-Time Nanny',
    price: 'Custom',
    unit: 'rate',
    color: 'border-tt-salmon',
    badge: null,
    features: [
      'Dedicated full-time caregiver',
      "Tailored to your family's schedule",
      'Newborn, infant & toddler specialists',
      'Light housekeeping options',
      'Long-term placement support',
    ],
  },
]

const addons = [
  { label: 'Newborn & Night Nurse Care', desc: 'Specialist overnight newborn care so new parents can sleep.' },
  { label: 'After-School Childcare', desc: 'Reliable pickup and homework help for school-age kids.' },
  { label: 'Hotel & Resort Care', desc: 'Traveling families and visiting parents welcome.' },
  { label: 'Event & Wedding Childcare', desc: 'On-site care at venues, conferences, and corporate events.' },
  { label: 'Vacation & Travel Nannies', desc: 'Nannies who travel with your family domestically or abroad.' },
]

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-tt-lavender">

      {/* Header */}
      <div className="bg-white border-b border-tt-lavender-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="text-tt-teal text-sm font-semibold tracking-widest uppercase mb-2">Transparent Pricing</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-tt-coral mb-4">Rates & Services</h1>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            No placement fees. No membership fees. No surprises. You pay only for the hours your nanny works —
            with rates that vary slightly by location.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Pricing cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map(p => (
              <div key={p.name} className={`bg-white rounded-xl shadow-card border-t-4 ${p.color} p-6 relative`}>
                {p.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tt-coral text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                    {p.badge}
                  </span>
                )}
                <h3 className="font-bold text-tt-text text-base mb-1">{p.name}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-tt-coral">{p.price}</span>
                  <span className="text-tt-muted text-xs ml-1">{p.unit}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {p.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-tt-teal flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#" onClick={demo}
                  className="block text-center text-sm font-bold bg-tt-teal hover:bg-tt-teal-dark text-white py-2 rounded-lg transition-colors">
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-tt-muted mt-4">
            * Rates are starting estimates and vary by location, schedule, and experience level. Contact your local office for exact pricing.
          </p>
        </section>

        {/* Fee comparison */}
        <section className="bg-white rounded-xl shadow-card p-8">
          <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-2">Why Twinkle Toes</p>
          <h2 className="text-xl font-bold text-tt-coral mb-6">We Don't Charge What Others Do</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-tt-lavender-mid">
                  <th className="text-left py-2 pr-4 text-tt-muted font-semibold text-xs uppercase tracking-wide">Fee Type</th>
                  <th className="py-2 px-4 text-tt-muted font-semibold text-xs uppercase tracking-wide text-center">Other Agencies</th>
                  <th className="py-2 pl-4 text-tt-teal font-semibold text-xs uppercase tracking-wide text-center">Twinkle Toes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-tt-lavender">
                {[
                  ['Placement Fee', '$800 – $3,000+', 'Free'],
                  ['Membership / Annual Fee', '$200 – $500/yr', 'Free'],
                  ['App or Platform Fee', 'Often required', 'No app needed'],
                  ['Long-term Contract', 'Usually required', 'No contracts'],
                  ['Background Check Cost', 'Sometimes passed to family', 'Included'],
                ].map(([type, other, tt]) => (
                  <tr key={type}>
                    <td className="py-2.5 pr-4 font-medium text-tt-text">{type}</td>
                    <td className="py-2.5 px-4 text-center text-red-400">{other}</td>
                    <td className="py-2.5 pl-4 text-center text-tt-teal font-semibold">{tt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Add-on services */}
        <section>
          <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-2">Additional Services</p>
          <h2 className="text-xl font-bold text-tt-coral mb-6">Specialty Childcare Options</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map(a => (
              <div key={a.label} className="bg-white rounded-xl shadow-card p-5 border border-tt-lavender-mid">
                <div className="w-6 h-1 bg-tt-coral rounded mb-3" />
                <h3 className="font-bold text-tt-text text-sm mb-1">{a.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-tt-teal-light border border-tt-teal/20 rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-tt-coral mb-2">Ready to Get Started?</h2>
          <p className="text-gray-600 text-sm mb-5">Request a free consultation with your local Twinkle Toes office today.</p>
          <a href="#" onClick={demo}
            className="inline-flex items-center bg-tt-teal hover:bg-tt-teal-dark text-white font-bold px-6 py-2.5 rounded-lg transition-colors text-sm">
            Request a Free Consultation →
          </a>
        </section>

      </div>

      <Footer />
    </div>
  )
}
