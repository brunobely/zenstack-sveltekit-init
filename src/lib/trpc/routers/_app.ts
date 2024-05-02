import { initTRPC } from '@trpc/server';
import { createRouter } from './generated/routers';
import type { Context } from '../context';

const t = initTRPC.context<Context>().create();

export const appRouter = createRouter(t.router, t.procedure);
export const createCaller = t.createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
