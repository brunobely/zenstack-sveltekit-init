# Commands run to create this project

```sh
pnpm create svelte@latest .
pnpm i -D prisma zenstack @zenstackhq/runtime @zenstackhq/trpc @trpc/client @trpc/server trpc-sveltekit
```

# To run locally

```sh
pnpm i
pnpm run model:update
pnpm run dev --port=5180
```

1. Open `http://localhost:5180`
2. Notice the errors:

```sh
7:06:02 PM [vite] Error when evaluating SSR module /src/lib/trpc/routers/_app.ts:
|- TypeError: Cannot read properties of undefined (reading 'aggregate')
    at Module.createRouter [as default] (/Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/generated/routers/User.router.ts:9:60)
    at Module.createRouter (/Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/generated/routers/index.ts:30:15)
    at /Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/_app.ts:7:26
    at async instantiateModule (file:///Users/myuser/workspace/zenstack-sveltekit-init/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.8/node_modules/vite/dist/node/chunks/dep-cNe07EU9.js:55058:9)

7:06:02 PM [vite] Error when evaluating SSR module /src/hooks.server.ts: failed to import "/src/lib/trpc/routers/_app.ts"
|- TypeError: Cannot read properties of undefined (reading 'aggregate')
    at Module.createRouter [as default] (/Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/generated/routers/User.router.ts:9:60)
    at Module.createRouter (/Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/generated/routers/index.ts:30:15)
    at /Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/_app.ts:7:26
    at async instantiateModule (file:///Users/myuser/workspace/zenstack-sveltekit-init/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.8/node_modules/vite/dist/node/chunks/dep-cNe07EU9.js:55058:9)

TypeError: Cannot read properties of undefined (reading 'aggregate')
    at Module.createRouter [as default] (/Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/generated/routers/User.router.ts:9:60)
    at Module.createRouter (/Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/generated/routers/index.ts:30:15)
    at /Users/myuser/workspace/zenstack-sveltekit-init/src/lib/trpc/routers/_app.ts:7:26
    at async instantiateModule (file:///Users/myuser/workspace/zenstack-sveltekit-init/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.8/node_modules/vite/dist/node/chunks/dep-cNe07EU9.js:55058:9)
```