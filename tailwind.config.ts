import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      "2xl": "1440px",
      mxl: { max: "1279px" },
      mlg: { max: "1049px" },
      mmlg: { max: "976px" },
      mmd: { max: "768px" },
      msm: { max: "639px" },
      mxs: { max: "480px" },
      mxxs: { max: "400px" },
      mxxss: { max: "375px" },
      mxxssw: { max: "355px" },
      mxxxs: { max: "320px" },
      "ms-height": { raw: "(max-height: 700px)" },
      "mxl-height": { raw: "(max-height: 850px)" },
    },
    fontFamily: {
      // brCobane: ["var(--font-brCobane)", ...fontFamily.sans],
      poppins: ['Poppins', ...fontFamily.sans],
      inter: ['Inter', ...fontFamily.sans],
      'sf-pro': ['"SF Pro Display"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {},
      fontSize: {
        // Headings element styles
        "h-xxl": ["3rem", { lineHeight: "48px", fontWeight: 700 }],
        "h-xl": ["2rem", { lineHeight: "40px", fontWeight: 700 }],
        "h-l": ["1.5rem", { lineHeight: "24px", fontWeight: 700 }],
        "h-m": ["1.1875rem", { lineHeight: "24px", fontWeight: 700 }],
        "h-s": ["1rem", { lineHeight: "24px", fontWeight: 700 }],
        "h-xs": [".75rem", { lineHeight: "15.96px", fontWeight: 700 }],

        // Paragraph element styles
        "p-xxl": ["1.5rem", { lineHeight: "32px", fontWeight: 400 }],
        "p-xl": ["1.1875rem", { lineHeight: "28px", fontWeight: 400 }],
        "p-l": ["1rem", { lineHeight: "16px", fontWeight: 400 }],
        "p-m": ["0.875rem", { lineHeight: "20.02px", fontWeight: 400 }],
        "p-s": ["0.75rem", { lineHeight: "15.96px", fontWeight: 400 }],
        // Controls element styles
        "c-xxl": ["1.5rem", { lineHeight: "24px", fontWeight: 700 }],
        "c-xl": ["1.1875rem", { lineHeight: "19px", fontWeight: 700 }],
        "c-l": ["1rem", { lineHeight: "24px", fontWeight: 700 }],
        "c-m": ["0.875rem", { lineHeight: "15.96px", fontWeight: 700 }],
        "c-s": ["0.75rem", { lineHeight: "12px", fontWeight: 700 }],
      },
      colors: {
        // Blue
        B50: "var(--color-B50)",
        B75: "var(--color-B75)",
        B100: "var(--color-B100)",
        B200: "var(--color-B200)",
        B300: "var(--color-B300)",
        B400: "var(--color-B400)",
        B500: "var(--color-B500)",
        // Yellow
        Y50: "var(--color-Y50)",
        Y75: "var(--color-Y75)",
        Y100: "var(--color-Y100)",
        Y200: "var(--color-Y200)",
        Y300: "var(--color-Y300)",
        Y400: "var(--color-Y400)",
        Y500: "var(--color-Y500)",

        // Green
        G50: "var(--color-G50)",
        G75: "var(--color-G75)",
        G100: "var(--color-G100)",
        G200: "var(--color-G200)",
        G300: "var(--color-G300)",
        G400: "var(--color-G400)",
        G500: "var(--color-G500)",

        // Red
        R50: "var(--color-R50)",
        R75: "var(--color-R75)",
        R100: "var(--color-R100)",
        R200: "var(--color-R200)",
        R300: "var(--color-R300)",
        R400: "var(--color-R400)",
        R500: "var(--color-R500)",


        // secondary salmon green
        SLGL: "var(--color-SLGL)",
        SLGLH: "var(--color-SLGLH)",
        SLGLA: "var(--color-SLGLA)",
        SLGN: "var(--color-SLGN)",
        SLGNH: "var(--color-SLGNH)",
        SLGB: "var(--color-SLGB)",
        SLGBH: "var(--color-SLGBH)",
        SLGBA: "var(--color-SLGBA)",
        SLGD: "var(--color-SLGD)",
        SLGDH: "var(--color-SLGDH)",
        SLGDA: "var(--color-SLGDA)",
        SLGDD: "var(--color-SLGDD)",


        //Text
        "text-default": "var(--color-text-default)",
        "text-light": "var(--color-text-light)",
      },
      boxShadow: {
        auth: "0 0 1px 0 #091E424F, 0 8px 12px 0 #091E424F",
      },
      dropShadow: {
        "image-drop-shadow": "-43px 46px 60px 0px #091E424F",
      },
      animation: {
        move: "move 2s linear infinite",
        bxSpin: "bxSpin 0.5s linear infinite",
        shadow: "shadow 0.5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(calc(5 / 2 * 100%))" },
        },
        bxSpin: {
          "17%": { borderBottomRightRadius: "3px" },
          "25%": { transform: "translateY(9px) rotate(22.5deg)" },
          "50%": {
            transform: "translateY(18px) scale(1, .9) rotate(45deg)",
            borderBottomRightRadius: "40px",
          },
          "75%": { transform: "translateY(9px) rotate(67.5deg)" },
          "100%": { transform: "translateY(0) rotate(90deg)" },
        },
        shadow: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.2, 1)" },
        },
      },
    },
  },
  plugins: [
    // eslint-disable-next-line
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".tab-box-shadow": {
          "box-shadow": "0px 1px px 0px #EAECF0",
        },
        ".page-tab-box-shadow": {
          "box-shadow": "0px 2px 6px 0px #c1c7d066",
        },
        ".dropdown-menu-box-shadow": {
          "box-shadow": "0px 0px 1px 0px #091e424f, 0px 3px 5px 0px #091e4233",
        },
        ".sticky-column-shadow": {
          "box-shadow": "0px -1px 0px 0px #DDDDDD",
        },
        ".hideScrollBar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".hideScrollBar::-webkit-scrollbar": {
          display: "none", // Hide scrollbar in Webkit browsers
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
export default config;
