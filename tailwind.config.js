/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#FF764D',
        customBlue:'rgb(0, 0, 255)',
        customLemonade: 'rgb(251, 255, 167)',
        customLightGreen:'#B6FFC0',
        customPurple: '#D5B3FF',
        customLightPurple : '#B1C5FF',
        customGray: '#efefef',
        customFormColor: "#eee",
        customLogoOrange: '#FD5948'
      },
      spacing: {
        '193': '193px',
        '96':'96.867px',
        '21': '21px',
        '81': '81.93px',
        '573': '58.33333vw',
        '41': '41.66667vw',
        '8.3': '8.33333vw',
        '163': '163.863px',
        '14': '14px',
        '66.6': '66.66667vw',
        '203.6': '203.6px',
        '101.8': '101.8px',
        '159.06': '159.062px',
        '79.5': '79.533px',
        '632': '632.26px',
        '357': '357.89px',
        '75': '75vw',
        '33': '33.33333vw',
        '25': '25vw',
        '0.7': '0.7em',
        'fifty': '50vw',
        '45': '45vw',
        'hundred': '100px',
        'sixty': '60vw',
        'sixty-five': '65vw',
        'sixteen': '16.666vw',
        'forty': '40vw',
        '2': '2px',
        '188': '188px',
        '4.16': '4.166667vw',
        '1em': '1em',
        '0.35em': '0.35em',
        '1.5em': '1.5em',
        '0.4em': '0.4em',
        '0.75em': '0.75em',
        '1.25': '1.25rem',
        '20vw': '20vw',
        '430': '430px',
        '104': '104px',
        'thirty': '30vw',
        '200px':'200px',
        '450px': '450px',
        '2.5':'2.5rem',
        '0.625':'0.625rem'
      },
      lineHeight: {
        '1.4':'1.4',
        '1.5':'1.5'
      },
      fontSize: {
        'livePush': '30px',
        'abletonFound': '20px',
        '16': '16px',
        '1.25':'1.25rem',
        '1.875': '1.875rem',
        '0.875': '0.875rem',
        'hundred': '100px',
        '140px': '140px'
      },
      fontWeight: {
        '700': '700',
        '400': '400'
      },
      fontFamily: {
        futura : ["FUTURAPT", "sans-serif"]
      },
      
      
    },
  },
  plugins: [],
}

