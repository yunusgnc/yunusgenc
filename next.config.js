module.exports = {
  reactStrictMode: true,
  // target: 'serverless', // Bu satırı kaldırın, artık desteklenmiyor
  // exportPathMap içerisine sayfa yollarını ekleyin
  exportPathMap: async function () {
    return {
      "/": { page: "/" },
    };
  },
};
