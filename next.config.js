/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
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
            },
            {
                source: '/workshop',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 's-maxage=600, stale-while-revalidate=30',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
