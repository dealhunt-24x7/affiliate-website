import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  // optional (future proof)
    "./src/**/*.{js,ts,jsx,tsx,mdx}",    // optional (future proof)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
