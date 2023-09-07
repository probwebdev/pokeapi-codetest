import '~/css/core.css';

import { trpc } from '~/utils/trpc';

import type { AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => (
  <main className="flex min-h-screen w-screen items-center justify-center overflow-y-auto p-8">
    <Component {...pageProps} />
  </main>
);

export default trpc.withTRPC(MyApp);
