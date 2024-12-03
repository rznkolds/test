import createNextIntlPlugin from "next-intl/plugin";
import type {NextConfig} from "next";

const withNextIntl = createNextIntlPlugin('./src/languages/i18n/request.ts');

const nextConfig: NextConfig = {

};

export default withNextIntl(nextConfig);