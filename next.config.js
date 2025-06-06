/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // target: 'serverless', // Bu satırı kaldırın, artık desteklenmiyor
  // exportPathMap içerisine sayfa yollarını ekleyin
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
  output: "export",
};

module.exports = nextConfig;
