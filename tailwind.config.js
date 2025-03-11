/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: {
          DEFAULT: "#07bc0c",
          hover: "#066b08",
        },
        secondary: "#a4e6a5",
        tertiary: "#686868",
        background: "#222222",
        textSecondary: "#686868",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "1px 8px 10px 2px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "fade-in": "fade-in 0.3s ease-in-out",
        "fade-out": "fade-out 0.3s ease-in-out",
        "slide-in-from-top-full": "slide-in-from-top-full 0.3s ease-in-out",
        "slide-in-from-bottom-full":
          "slide-in-from-bottom-full 0.3s ease-in-out",
        "slide-out-to-right-full": "slide-out-to-right-full 0.3s ease-in-out",
      },
      keyframes: {
        float: {
          "50%": {
            transform: "translateY(10px)",
            borderRadius: "45% 55% 45% 55%",
          },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        "slide-in-from-top-full": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom-full": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out-to-right-full": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
