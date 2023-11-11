module.exports = {
    content: [
        // Note the addition of the `app` directory.
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: ["class", '[data-mode="ligth"]'],

    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-poppins)"],
                poppins: ["Poppins"],
            },
            colors: {
                primary: "#2c8ce4",
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-8px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.2s ease-out",
            },
        },
    },
    plugins: [],
};
