/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['lh3.googleusercontent.com'],
    },
    headers: {
        key: 'Cache-Control',
        value: 's-maxage=1, stale-while-revalidate=59'
    }
};

module.exports = nextConfig;
