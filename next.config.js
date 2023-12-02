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
      async rewrites() {
        return [
          {
            source: '/api/auth/:path*',
            destination: '/api/auth/:path*',
          },
          {
            source: '/api/:path*',
            destination: 'https://api.mercadopago.com/:path*',
          },
          {
            source: '/api/:path*',
            destination: 'https://www.mercadopago.cl/:path*',
          }
        ];
      },
}

module.exports = nextConfig
