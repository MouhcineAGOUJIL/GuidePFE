/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Réduire au maximum les watchers pour éviter EMFILE
    config.watchOptions = {
      // utiliser le polling plutôt que inotify (moins de descripteurs)
      poll: 1000,
      aggregateTimeout: 300,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/tmp/**',
        '/home/**', // ne pas remonter sur tout /home
      ],
    }
    return config
  },
}

module.exports = nextConfig

