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
        gray: "#292524",
        lightgray: "#d6d3d1",
        dimgray: "#78716c",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        sora: "Sora",
        "heading-h1": "Gantari",
        inter: "Inter",
        "frank-ruhl-libre": "'Frank Ruhl Libre'",
      },
    },
    fontSize: {
      lg: "18px",
      "29xl": "48px",
      "5xl": "24px",
      "9xl": "28px",
      "37xl": "56px",
      "10xl-7": "29.7px",
      "13xl": "32px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
