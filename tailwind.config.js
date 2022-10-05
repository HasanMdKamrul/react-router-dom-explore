/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#ff77bf",
        
"secondary": "#6aedea",
        
"accent": "#80f7ac",
        
"neutral": "#191F24",
        
"base-100": "#EDEDED",
        
"info": "#5DB4EA",
        
"success": "#2AB77A",
        
"warning": "#A68907",
        
"error": "#FB3758",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
