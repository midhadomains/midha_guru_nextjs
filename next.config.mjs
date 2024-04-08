/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.geeksforgeeks.org',
                port: '',
                pathname: '/**',
            }
        ]
    }
};

export default nextConfig;
