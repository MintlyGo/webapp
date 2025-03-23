/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--primary-foreground))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          800: "hsl(var(--primary))",
          600: "hsl(var(--primary-600))",
          400: "hsl(var(--primary-400))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        customGray: "rgb(76, 85, 102)",
      },
      keyframes: {
        'dialog-slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          }
        }
      },
      animation: {
        'dialog-slide-in': 'dialog-slide-in 0.3s ease-out forwards',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addComponents, theme }) {
      addComponents({
        ".animated-underline": {
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "hsl(var(--primary-600))",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 0.3s ease-out",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
          },
        },
      });
    },
  ],
};
