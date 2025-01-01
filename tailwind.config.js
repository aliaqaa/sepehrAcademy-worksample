/** @type {import('tailwindcss').Config} */  
module.exports = {  
  content: [  
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  
    "./components/**/*.{js,ts,jsx,tsx,mdx}",  
    "./app/**/*.{js,ts,jsx,tsx,mdx}",  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {  
    extend: {  
      colors: {  
        background: "var(--background)",  
        foreground: "var(--foreground)",  
        primaryCyan: "var(--primary-cyan)",  
        linearbg: "var(--linearbg)",  
        authOrangbutton: "var(--authOrangbutton)",  
        cyanlogin: "#008D8A",  
      },  
      backgroundImage: {  
        'linear-bg': 'linear-gradient(123deg, rgba(228,137,0,0.299124649859944) 22%, rgba(1,206,201,0.299124649859944) 100%);',  
      },  
    },  
  },  
  plugins: [],  
};