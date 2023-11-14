/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
      },
      env:{
        cloudName: 'dwj6wtgtb',
        cloudPreset: 'oxxsnr7q',
        apiKeyWebPay: '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C',
        webpayComecioKey: '597055555532',
      }
}

module.exports = nextConfig
