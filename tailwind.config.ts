import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { colors } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: { 
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {"bg-cover": "#fde047"},

      backgroundSize: {
        'cover': 'cover',
      }
    },
  },
  plugins: [
    require ('daisyui'),  ],
} satisfies Config;
