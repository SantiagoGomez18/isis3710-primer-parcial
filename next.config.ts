import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
};

nextConfig.images = {
  domains: ['https://pokeapi.co/'],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
