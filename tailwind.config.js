/** @type {import('tailwindcss').Config} */

export default  {
   darkMode: 'class',

   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
   ],

   theme: {
      extend: {
         colors: {
            "white": {
               DEFAULT: 'rgba(255, 255, 255, 1)',
               '4': 'rgba(255, 255, 255, 0.04)',
               '8': 'rgba(255, 255, 255, 0.08)',
               '16': 'rgba(255, 255, 255, 0.16)',
               '40': 'rgba(255, 255, 255, 0.40)',
               '64': 'rgba(255, 255, 255, 0.64)',
               '80': 'rgba(255, 255, 255, 0.80)',
            },

            "jc-white": {
               DEFAULT: 'rgba(238, 238, 238, 1)',
               '4': 'rgba(238, 238, 238, 0.04)',
               '8': 'rgba(238, 238, 238, 0.08)',
               '16': 'rgba(238, 238, 238, 0.16)',
               '40': 'rgba(238, 238, 238, 0.40)',
               '64': 'rgba(238, 238, 238, 0.64)',
            },

            "black": {
               DEFAULT: 'rgba(0, 0, 0, 1)',
               '4': 'rgba(0, 0, 0, 0.04)',
               '8': 'rgba(0, 0, 0, 0.08)',
               '16': 'rgba(0, 0, 0, 0.16)',
               '40': 'rgba(0, 0, 0, 0.40)',
               '64': 'rgba(0, 0, 0, 0.64)',
               '80': 'rgba(0, 0, 0, 0.80)',
            },

            "jc-black": {
               DEFAULT: 'rgba(17, 17, 17, 1)',
               '4': 'rgba(17, 17, 17, 0.04)',
               '8': 'rgba(17, 17, 17, 0.08)',
               '16': 'rgba(17, 17, 17, 0.16)',
               '40': 'rgba(17, 17, 17, 0.40)',
               '64': 'rgba(17, 17, 17, 0.64)',
            }
         },

         fontFamily: {
            'bebas': ['Bebas Neue', 'sans-serif'],
            'bebasPro': ['Bebas Neue Pro Bold', 'sans-serif'],
            'abel': ['Abel', 'sans-serif'],
            'jungleWood': ['Jungle Wood Crunge', 'sans-serif'],
         },

         screens: {
            'sml': '480px',
            // => @media (min-width: 480px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'hero': '966px',
            // => @media (min-width: 768px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'plg': '992px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'pxl': '1200px',
            // => @media (min-width: 1200px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            'p2xl': '1440px',
            // => @media (min-width: 1500px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }

            '3xl': '1600px',
            // => @media (min-width: 1600px) { ... }

            'p4xl': '1600px',
            // => @media (min-width: 1600px) { ... }
         }
      }
   },
   plugins: [],
}