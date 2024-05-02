import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { getEnhancedPrisma } from '$lib/prisma';
import { createContext } from '$lib/trpc/context';
import { appRouter } from '$lib/trpc/routers/_app';
import { createTRPCHandle } from 'trpc-sveltekit';

export const prismaHandle: Handle = async ({ event, resolve }) => {
	event.locals.db = getEnhancedPrisma({ id: '1', email: 'john@example.com' });
	return resolve(event);
};

export const trpcHandle: Handle = createTRPCHandle({ router: appRouter, createContext });

export const handle = sequence(prismaHandle, trpcHandle);
