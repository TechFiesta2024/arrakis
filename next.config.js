/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage-techfiesta24.blr1.cdn.digitaloceanspaces.com'
            }
        ],
        domains: ['lh3.googleusercontent.com'],
    },
    async headers() {
        return [
            {
                source: '/events/[id]',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 's-maxage=60, stale-while-revalidate=30',
                    },
                ],
            },
            {
                source: '/workshop/[id]',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 's-maxage=60, stale-while-revalidate=30',
                    },
                ],
            }
        ];
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

module.exports = nextConfig;
