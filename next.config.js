// Add rewrites for the API routes
module.exports = {
  async rewrites() {
    return [
      {
        source: '/public/myfile.html',
        destination: '/pages/api/myfile.js'
      }
    ];
  }
};

// rewrites: async () => [
//     {
//       source: "/public/myfile.html",
//       destination: "/pages/api/myfile.js",
//     },
//   ],
