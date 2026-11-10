/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ui/**/*.{ts,tsx}"],
  prefix: "tw-",
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: []
}
