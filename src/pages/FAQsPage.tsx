import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import { cn } from '@/lib/utils'

const faqGroups = [
  {
    category: 'Getting Started',
    faqs: [
      { q: "How does Twinkle Toes work?", a: "It's simple: contact your local Twinkle Toes office, tell us about your childcare needs, and we match you with pre-screened nannies in your area. No app to download, no placement fee, no membership required. You pay only for the hours your nanny works." },
      { q: "Do I have to sign a long-term contract?", a: "No. Twinkle Toes has no long-term contracts. You can use our nannies as often or as rarely as your family needs — from occasional date nights to full-time weekly care. Your schedule, your terms." },
      { q: "How quickly can I get a nanny?", a: "In most cases we can match you within 24-72 hours, depending on your location and schedule requirements. For recurring placements we recommend reaching out at least a week in advance to ensure the best match." },
      { q: "What areas do you serve?", a: "Twinkle Toes currently operates in 12 cities across the US, including Gainesville, Orlando, Tampa, Nashville, Austin, Dallas, Houston, Jacksonville, Charlotte, Atlanta, Denver, and Phoenix. Visit our Locations page to find your local office." },
    ],
  },
  {
    category: 'Our Nannies',
    faqs: [
      { q: "How are your nannies screened?", a: "Every Twinkle Toes nanny goes through a multi-step screening process: national background check, county-level background check, personal interview with our team, CPR and First Aid certification verification, and reference checks with previous childcare employers. We screen far beyond industry standards." },
      { q: "Are your nannies CPR certified?", a: "Yes. CPR and First Aid certification is a requirement for every Twinkle Toes nanny — not optional. We verify certification before any nanny is placed with a family." },
      { q: "Can I request the same nanny every time?", a: "Absolutely — and we encourage it. Building a consistent relationship between your children and their caregiver is important to us. We work to match you with nannies whose availability aligns with your recurring schedule." },
      { q: "What if my usual nanny is unavailable?", a: "We maintain a network of qualified substitute nannies so coverage is never in question. All substitutes go through the same rigorous screening process as our regular nannies." },
    ],
  },
  {
    category: 'Pricing & Fees',
    faqs: [
      { q: "Do you charge a placement fee?", a: "Never. Unlike most nanny agencies that charge $800-$3,000+ in placement fees, Twinkle Toes charges zero. You pay only for the hours your nanny works." },
      { q: "Is there a membership or annual fee?", a: "No. There are no membership fees, no registration fees, and no subscription costs. Twinkle Toes is completely free to use — your only cost is the hourly rate for your nanny's time." },
      { q: "What is the hourly rate?", a: "Starting rates are typically $20-$22/hour depending on your location, schedule type, and the nanny's experience level. Contact your local Twinkle Toes office for exact pricing in your area." },
      { q: "Is there a minimum booking?", a: "For occasional and date night bookings, we typically require a 3-hour minimum. For recurring placements there is no minimum — we work around your actual schedule." },
    ],
  },
  {
    category: 'Policies',
    faqs: [
      { q: "What is your cancellation policy?", a: "Cancellation policies vary slightly by location. In general, cancellations made at least 24 hours in advance are fee-free. Late cancellations may incur a partial booking fee. Your local office will provide full details when you register." },
      { q: "What if I am not happy with my nanny?", a: "Your satisfaction is our priority. If a nanny is not the right fit, contact your local office and we will work quickly to find you a better match at no additional cost." },
      { q: "Are nannies employees or independent contractors?", a: "Nanny employment arrangements vary by location. Your local Twinkle Toes office will walk you through the specifics for your city, including any relevant tax or payroll considerations." },
    ],
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-tt-lavender last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left py-4 gap-4">
        <span className="font-semibold text-tt-text text-sm">{q}</span>
        <ChevronDown className={cn('w-4 h-4 text-tt-teal flex-shrink-0 transition-transform', open && 'rotate-180')} />
      </button>
      {open && <p className="text-sm text-gray-600 leading-relaxed pb-4">{a}</p>}
    </div>
  )
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-tt-lavender">
      <div className="bg-white border-b border-tt-lavender-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 text-center">
          <p className="text-tt-teal text-sm font-semibold tracking-widest uppercase mb-2">Have Questions?</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-tt-coral mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about Twinkle Toes — from how we screen nannies to what you will pay.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {faqGroups.map(group => (
          <section key={group.category} className="bg-white rounded-xl shadow-card overflow-hidden">
            <div className="bg-tt-lavender px-6 py-3 border-b border-tt-lavender-mid">
              <h2 className="text-xs font-bold text-tt-coral uppercase tracking-wider">{group.category}</h2>
            </div>
            <div className="px-6">
              {group.faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </section>
        ))}

        <section className="bg-tt-teal text-white rounded-xl p-8 text-center">
          <h2 className="font-bold text-lg mb-2">Still Have Questions?</h2>
          <p className="text-white/80 text-sm mb-5">Reach out to your local Twinkle Toes office — we are happy to help.</p>
          <a href="/" className="inline-flex items-center bg-white text-tt-teal font-bold px-6 py-2.5 rounded-lg hover:bg-tt-teal-light transition-colors text-sm">
            Find Your Local Office →
          </a>
        </section>
      </div>

      <Footer />
    </div>
  )
}
