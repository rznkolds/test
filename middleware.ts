import createMiddleware from 'next-intl/middleware';
import {routing} from '@/languages/i18n/routing';

export default createMiddleware(routing);

export const config = {

    matcher: ["/", "/(en|tr)/:path*"],
};