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
            },
            {
                protocol: 'https',
                hostname: 'files.midhafin.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'midha-images.s3.ap-south-1.amazonaws.com',
                port: '',
                pathname: '/**',
            }
        ]
    }
};


export default nextConfig;
