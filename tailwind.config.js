/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#ebe9e6",
          "200": "rgba(235, 233, 230, 0.07)",
        },
        gainsboro: "#e5e4e4",
        gray: "#292524",
        dimgray: "#78716c",
        white: "#fff",
        lightgray: "#d6d3d1",
      },
      spacing: {},
      fontFamily: {
        sora: "Sora",
        inter: "Inter",
        "frank-ruhl-libre": "'Frank Ruhl Libre'",
      },
    },
    fontSize: {
      lg: "18px",
      "9xl": "28px",
      "5xl": "24px",
      "10xl-7": "29.7px",
      "13xl": "32px",
      "37xl": "56px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
