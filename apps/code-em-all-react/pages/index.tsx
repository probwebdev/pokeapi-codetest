import { trpc } from '~/utils/trpc';

const IndexPage = () => {
  const result = trpc.greeting.useQuery({ name: 'Rob' });

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1>{result.data?.text ? result.data.text : 'Loading...'}</h1>
    </div>
  );
};

export default IndexPage;
