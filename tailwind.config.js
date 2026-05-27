/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tt-coral':        '#D97370',
        'tt-coral-dark':   '#BF5A57',
        'tt-coral-light':  '#FAF0EF',
        'tt-teal':         '#4FBFBF',
        'tt-teal-dark':    '#3A9E9E',
        'tt-teal-light':   '#EAF7F7',
        'tt-lavender':     '#EFEFF5',
        'tt-lavender-mid': '#E4E3ED',
        'tt-salmon':       '#E07878',
        'tt-salmon-dark':  '#C95F5F',
        'tt-card':         '#FFFFFF',
        'tt-gray':         '#F5F7FA',
        'tt-gray-mid':     '#EAECEF',
        'tt-text':         '#2C2C3A',
        'tt-muted':        '#6B7280',
        border: 'hsl(var(--border))',
        ring:   'hsl(var(--ring))',
      },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      borderRadius: { lg: '0.75rem', md: '0.5rem', sm: '0.375rem' },
      boxShadow: {
        nav:          '0 1px 4px rgba(0,0,0,.08)',
        card:         '0 1px 4px rgba(0,0,0,.07), 0 1px 2px rgba(0,0,0,.04)',
        'card-hover': '0 8px 24px rgba(0,0,0,.10), 0 2px 8px rgba(0,0,0,.06)',
        dropdown:     '0 8px 24px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.06)',
      },
    },
  },
  plugins: [],
}
