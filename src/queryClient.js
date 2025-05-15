import { QueryCache, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
  defaultOptions: {
    mutations: {
      networkMode: 'always',
      retry: false,
    },
    queries: {
      networkMode: 'always',
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default queryClient;
