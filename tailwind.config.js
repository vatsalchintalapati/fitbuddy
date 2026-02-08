/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#4dae50", // Example green from screenshots
                secondary: "#e8f5e9", // Light green background
            }
        },
    },
    plugins: [],
}
