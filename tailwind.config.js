/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'border-gradient-1': 'linear-gradient(-30deg, rgba(215,215,215,1) 0%, rgba(255,255,255,0) 45%)',
        'border-gradient-2': 'linear-gradient(30deg, rgba(215,215,215,1) 0%, rgba(255,255,255,0) 40%)',
        'border-gradient-3': 'linear-gradient(180deg, rgba(215,215,215,1) 0%, rgba(255,255,255,0) -6%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

