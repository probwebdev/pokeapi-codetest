import '~/css/core.css';

import { trpc } from '~/utils/trpc';

import type { AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default trpc.withTRPC(MyApp);
