import { type Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        "darker-background": "hsl(var(--darker-background))",
        foreground: "hsl(var(--foreground))",
        arrow: "hsl(var(--arrow))",
        shadow: "hsl(var(--shadow))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        link: {
          DEFAULT: "hsl(var(--link))",
          foreground: "hsl(var(--link-foreground))",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          foreground: "hsl(var(--input-foreground) / 0.5)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "info-alert":
          "linear-gradient(270deg, hsl(var(--info-alert-from)) 0%, hsl(var(--info-alert-to)) 100%)",
        "warning-alert":
          "linear-gradient(270deg, hsl(var(--warning-alert-from)) 0%, hsl(var(--warning-alert-to)) 100%)",
        "grey-background":
          "linear-gradient(360deg, hsl(var(--grey-bg-from)) -14.56%, hsl(var(--grey-bg-to)) 55.82%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        base: "0px 4px 12px 2px hsl(var(--shadow))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
