import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
  const { locals: { supabase, getSession, db: prisma } } = event;
  return {
    supabase,
    getSession,
    prisma,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
