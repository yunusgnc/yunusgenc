// next.config.js
module.exports = {
  reactStrictMode: true,
  output: "out", // ya da istediğiniz bir klasör adı
  experimental: {
    images: {
      loader: "imgix",
      path: "",
    },
  },
};
