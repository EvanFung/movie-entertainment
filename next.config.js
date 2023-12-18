/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        // baseURL: process.env.ENDPOINT,
        // accessToken: process.env.TMDB_API_READ_ACCESS_TOKEN,
    },
    reactStrictMode: true,
    images: {
        domains: ['source.unsplash.com', 'image.tmdb.org'],
    },
    output: 'standalone',
}

module.exports = nextConfig
