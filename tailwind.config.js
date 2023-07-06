/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          primary: withOpacity("--color-primary"),
          secondary: withOpacity("--color-secondary"),
        },
      },
      textColor: {
        palette: {
          base: withOpacity("--color-text-base"),
          mute: withOpacity("--color-text-muted"),
          side: withOpacity("--color-text-side"),
        },
      },
      backgroundColor: {
        palette: {
          fill: withOpacity("--color-bg"),
          card: withOpacity("--color-bg-side"),
          dark: withOpacity("--color-bg-dark"),
          digitalCategory: "var(--digital-category-bgc)",
          fashionCategory: "var(--fashion-category-bgc)",
          beautyCategory: "var( --beauty-category-bgc)",
          sportCategory: "var(--sport-category-bgc)",
          houseCategory: "var(--house-category-bgc)",
          toyCategory: "var(--toy-category-bgc)",
          stationeryCategory: "var(--stationery-category-bgc)",
        },
      },
      fontFamily: {
        farsi: "'iranyekan', 'IRANSans', 'Tahoma'",
        english: "'Poppins', 'Roboto', 'sans-serif'",
      },
      keyframes: {
        sidenavLTR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        sidenavRTL: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0px)" },
        },
        fade: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        dropDown: {
          "0%": { opacity: 0, transform: "scaleY(0)" },
          "100%": { opacity: 1, transform: "scaleY(1)" },
        },
      },
      animation: {
        sidenavLTREntering: "sidenavLTR 0.3s ease-in-out forwards",
        sidenavRTLEntering: "sidenavRTL 0.3s ease-in-out forwards",
        sidenavLTRExit: "sidenavLTR 0.3s ease-in-out reverse forwards",
        sidenavRTLExit: "sidenavRTL 0.3s ease-in-out reverse forwards",
        fadeEntering: "fade 0.3s forwards",
        fadeExit: "fade 0.3s reverse forwards",
        dropDown: "dropDown 0.3s forwards",
        dropDownExit: "dropDown 0.3s reverse forwards",
      },
      backgroundImage: {
        offersBG: "url('/images/carouselBox-bg/offersbg.webp')",
      },
    },
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         'regal-blue': '#243c5a',
//         'nft-dark': '#24252D',
//         'nft-gray-1': '#E3E1E3',
//         'nft-gray-2': '#888888',
//         'nft-gray-3': '#4F4F4F',
//         'nft-black-1': '#2D2E36',
//         'nft-black-2': '#1B1A21',
//         'nft-black-3': '#2A2D3A',
//         'nft-black-4': '#24252D',
//         'nft-red-violet': '#7B3FE4',
//         'file-active': '#2196f3',
//         'file-accept': '#00e676',
//         'file-reject': '#ff1744',
//         'overlay-black': 'rgba(0, 0, 0, 0.8)',
//       },
//       width: {
//         215: '215px',
//         357: '357px',
//         557: '557px',
//       },
//       minWidth: {
//         155: '155px',
//         190: '190px',
//         215: '215px',
//         240: '240px',
//         256: '256px',
//         327: '327px',
//       },
//       height: {
//         300: '300px',
//         557: '557px',
//       },
//       inset: {
//         45: '45%',
//         65: '65px',
//       },
//       spacing: {
//         65: '65px',
//       },
//       flex: {
//         2: '2 2 0%',
//       },
//       lineHeight: {
//         70: '70px',
//       },
//       zIndex: {
//         '-5': '-5',
//         0: '0',
//       },
//     },
//     screens: {
//       lg: { max: '1800px' },
//       md: { max: '990px' },
//       sm: { max: '600px' },
//       xs: { max: '400px' },
//       minmd: '1700px',
//       minlg: '2100px',
//     },
//     fontFamily: {
//       poppins: ['Poppins', 'sans-serif'],
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };