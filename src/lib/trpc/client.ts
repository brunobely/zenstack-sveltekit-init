// import { httpBatchLink, createTRPCProxyClient } from '@trpc/client';
import type { AppRouter } from '$lib/trpc/routers/_app';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import superjson from 'superjson';

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

export function trpc(init?: TRPCClientInit) {
  const isBrowser = typeof window !== 'undefined';
  if (isBrowser && browserClient) return browserClient;
  const client = createTRPCClient<AppRouter>({ init, transformer: superjson });
  if (isBrowser) browserClient = client;
  return client;
}
