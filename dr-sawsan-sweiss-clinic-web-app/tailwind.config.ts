import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bg_primary: '#F7F8F7',
        bg_secondary: '#D1D8BD',
        bg_tertiary: '#777E5C',
        bg_alternate: '#C7C2AB',
        bg_success: '#A3F8C6',
        bg_error: '#FCCCCC',
            
        border_primary: '#283106',
        border_secondary: '#B0B6BC',
        border_tertiary: '#C7C2AB',
        border_alternate: '#777E5C',
        border_success: '#A3F8C6',
        border_error: '#F8A3A3',
    
        text_primary: '#283106',
        text_secondary: '#B0B6BC',
        text_alternate: '#C7C2AB',
        text_success: '#4FE28D',
        text_error: '#E24F4F',
    
        link_primary: '#415107',
        link_secondary: '#415107',
        link_alternate: '#415107',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
