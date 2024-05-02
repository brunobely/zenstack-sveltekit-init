# Commands run to create this project

```sh
pnpm create svelte@latest .
pnpm i -D prisma zenstack @zenstackhq/runtime @zenstackhq/trpc @trpc/client @trpc/server trpc-sveltekit
```

# To run locally

```sh
pnpm i
pnpm run model:update
pnpm run dev
```