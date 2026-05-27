import Footer from '@/components/layout/Footer'
import { CheckCircle, Shield, Heart, Users } from 'lucide-react'

const demo = (e: React.MouseEvent) => { e.preventDefault(); alert('Nanny application available in the full build.') }

const perks = [
  { icon: 'shield', title: 'Safe & Professional', body: "Every family you work with is vetted by our team. You will always know who you are working for." },
  { icon: 'dollar', title: 'Competitive Pay', body: "Earn $18-$25+ per hour depending on experience, schedule, and location." },
  { icon: 'heart', title: 'Flexible Scheduling', body: "Set your own availability. Work evenings, weekends, weekdays — whatever fits your life." },
  { icon: 'users', title: 'Supportive Team', body: "You are never alone. Our local owner-operators are available to support you every step of the way." },
]

const requirements = [
  'At least 18 years of age',
  'Valid driver license and reliable transportation',
  'Current CPR and First Aid certification (or willingness to obtain)',
  'At least 1 year of professional childcare experience',
  'Ability to pass a national and county-level background check',
  'Strong communication skills and genuine love of working with children',
  'Eligible to work in the United States',
  'Positive, verifiable references from previous childcare employers',
]

const steps = [
  { step: '01', title: 'Submit Your Application', body: 'Fill out our online application with your experience, availability, and references.' },
  { step: '02', title: 'Phone Interview', body: 'A member of our local team will reach out to learn more about you and answer your questions.' },
  { step: '03', title: 'Background Check', body: 'We run a thorough national and county-level background check — fully handled by our team.' },
  { step: '04', title: 'Welcome to the Team', body: 'Once approved, you will be matched with families in your area. Start earning on your own schedule.' },
]

export default function BecomeNannyPage() {
  return (
    <div className="min-h-screen bg-tt-lavender">

      {/* Hero */}
      <div className="bg-white border-b border-tt-lavender-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="text-tt-teal text-sm font-semibold tracking-widest uppercase mb-2">Join Our Team</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-tt-coral mb-4">Become a Twinkle Toes Nanny</h1>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Love working with kids? Join the Twinkle Toes family — the only pediatrician-recommended nanny agency in the country.
            Flexible hours, competitive pay, and a team that has your back.
          </p>
          <a href="#apply" onClick={demo}
            className="inline-flex items-center mt-6 bg-tt-teal hover:bg-tt-teal-dark text-white font-bold px-7 py-3 rounded-lg transition-colors">
            Apply Now →
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* Perks */}
        <section>
          <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-2 text-center">Why Nannies Love Us</p>
          <h2 className="text-2xl font-bold text-tt-coral mb-8 text-center">The Twinkle Toes Advantage</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {perks.map(p => (
              <div key={p.title} className="bg-white rounded-xl shadow-card p-6 border border-tt-lavender-mid flex gap-4">
                <div className="w-10 h-10 rounded-full bg-tt-teal-light flex items-center justify-center flex-shrink-0">
                  {p.icon === 'shield' && <Shield className="w-5 h-5 text-tt-teal" />}
                  {p.icon === 'dollar' && <span className="text-tt-teal font-bold text-base">$</span>}
                  {p.icon === 'heart' && <Heart className="w-5 h-5 text-tt-teal" />}
                  {p.icon === 'users' && <Users className="w-5 h-5 text-tt-teal" />}
                </div>
                <div>
                  <h3 className="font-bold text-tt-coral mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white rounded-xl shadow-card p-8">
          <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-2">The Process</p>
          <h2 className="text-xl font-bold text-tt-coral mb-8">How to Join in 4 Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map(s => (
              <div key={s.step} className="flex gap-4">
                <div className="text-3xl font-bold text-tt-teal/25 leading-none flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-bold text-tt-text mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section>
          <p className="text-tt-teal text-xs font-bold uppercase tracking-widest mb-2">What We Look For</p>
          <h2 className="text-xl font-bold text-tt-coral mb-6">Requirements</h2>
          <div className="bg-white rounded-xl shadow-card p-6 border border-tt-lavender-mid">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {requirements.map(r => (
                <li key={r} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-tt-teal flex-shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Application CTA */}
        <section id="apply" className="bg-tt-coral rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Ready to Apply?</h2>
          <p className="text-white/80 text-sm mb-5 max-w-md mx-auto">
            Complete the application below and a member of your local team will be in touch within 1-2 business days.
          </p>
          <a href="#" onClick={demo}
            className="inline-flex items-center bg-white text-tt-coral font-bold px-7 py-3 rounded-lg hover:bg-tt-coral-light transition-colors text-sm">
            Start Your Application →
          </a>
        </section>

      </div>

      <Footer />
    </div>
  )
}
