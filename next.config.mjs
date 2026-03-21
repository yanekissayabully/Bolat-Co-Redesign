// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Добавьте эту строку для статической генерации
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Рекомендуется добавить для корректной работы ссылок
}

export default nextConfig