/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
      },
      env:{
        cloudName: 'dwj6wtgtb',
        cloudPreset: 'oxxsnr7q',
        acmp: 'TEST-7912064436267766-111617-dd73109e369a818f7c61391e1bca88a6-1551195321',
        pkmp: 'TEST-699c2148-a737-45ac-b65b-af3c34bc4e05'
      },
      // async rewrites() {
      //   return [{
      //     source: '/api/:path*',
      //     destination: 'https://api.mercadopago.com/:path*'
      //   }]
      // }
      // async headers () {
      //   return [
      //     {
      //       source: '/:path*',
      //       headers: [
      //         { key: "Access-Control-Allow-Credentials", value: "true" },
      //               { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
      //               { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
      //               { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
      //       ]
      //     }
      //   ]
      // }
}

module.exports = nextConfig
