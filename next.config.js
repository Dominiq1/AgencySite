

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: {
    domains: ['source.unsplash.com'],
  }
 
}


const withTM = require('../SAINTKYRO /node_modules/next-transpile-modules')(['hashconnect'], {
  resolveSymlinks: false,
  debug: true,
}, ['framer-motion'], ['react-bootstrap'], ['web3.storage'], ['react-icons/fa'], ['react-phone-number-input']);

module.exports = withTM({nextConfig});