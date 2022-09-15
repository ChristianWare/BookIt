/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  env: {
    DB_LOCAL_URI:
      "mongodb+srv://Admin:Altoids1645@cluster0.xydd2ju.mongodb.net/?retryWrites=true&w=majority",
  },
};
