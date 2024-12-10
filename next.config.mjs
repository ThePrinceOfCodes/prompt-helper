/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '', // Leave empty unless a specific port is required
        pathname: '/**', // Allows all paths from the hostname
        },
    ],
    }
};

export default nextConfig;
