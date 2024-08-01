/** @type {import('next').NextConfig} */
const nextConfig = {};

export async function redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  }
  