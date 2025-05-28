# Warp Web Dev with Astro

Code for my talk at CraftConf on the **Purple stage** at May 30, 14:45 - 15:30 CET.

## First Example (Hello World)

Let's run in *01-hello-world*:

```sh
npm create astro@latest
```

Then we fill out the survey:

```plain
$ npm create astro@latest

 astro   Launch sequence initiated.

   dir   Where should we create your new project?
         .

  tmpl   How would you like to start your new project?
         A basic, helpful starter project

  deps   Install dependencies?
         Yes

   git   Initialize a new git repository?
         No
      ◼  Sounds good! You can always run git init manually.

      ✔  Project initialized!
         ■ Template copied
         ■ Dependencies installed

  next   Liftoff confirmed. Explore your project!
         Run npm run dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

Run `npm run dev` to see how the DX looks like. Run `npm run build` to get a glimpse at final artifacts stored in *dist*.

Illustrate the static-site generation (SSG) and page speed capabilities of Astro, as well as essentials such as `<slot>` usage or the *public* folder. Show how Astro helps with image optimizations.

## Second Example (Islands)

Let's run in *02-islands*:

```sh
npm create astro@latest
```

Then we fill out the survey:

```plain
$ npm create astro@latest

 astro   Launch sequence initiated.

   dir   Where should we create your new project?
         .

  tmpl   How would you like to start your new project?
         Use blog template

  deps   Install dependencies?
         Yes

   git   Initialize a new git repository?
         No
      ◼  Sounds good! You can always run git init manually.

      ✔  Project initialized!
         ■ Template copied
         ■ Dependencies installed

  next   Liftoff confirmed. Explore your project!
         Run npm run dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

Add the React integration:

```sh
npx astro add react
```

This will make some changes:

```plain
$ npx astro add react
✔ Resolving packages...

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
 │ npm i @astrojs/react@^4.3.0 @types/react@^19.1.6 @types/react-dom@^19.1.5 react@^19.1.0 react-dom@^19.1.0  │
 ╰────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

✔ Continue? … yes
✔ Installing dependencies...

  Astro will make the following changes to your config file:

 ╭ astro.config.mjs ───────────────────────────────╮
 │ // @ts-check                                    │
 │ import { defineConfig } from 'astro/config';    │
 │ import mdx from '@astrojs/mdx';                 │
 │ import sitemap from '@astrojs/sitemap';         │
 │                                                 │
 │ import react from '@astrojs/react';             │
 │                                                 │
 │ // https://astro.build/config                   │
 │ export default defineConfig({                   │
 │     site: 'https://example.com',                │
 │     integrations: [mdx(), sitemap(), react()],  │
 │ });                                             │
 ╰─────────────────────────────────────────────────╯

✔ Continue? … yes
  
   success  Added the following integration to your project:
  - @astrojs/react

  Astro will make the following changes to your tsconfig.json:

 ╭ tsconfig.json ──────────────────────────╮
 │ {                                       │
 │   "extends": "astro/tsconfigs/strict",  │
 │   "include": [                          │
 │     ".astro/types.d.ts",                │
 │     "**/*"                              │
 │   ],                                    │
 │   "exclude": [                          │
 │     "dist"                              │
 │   ],                                    │
 │   "compilerOptions": {                  │
 │     "strictNullChecks": true,           │
 │     "jsx": "react-jsx",                 │
 │     "jsxImportSource": "react"          │
 │   }                                     │
 │ }                                       │
 ╰─────────────────────────────────────────╯

✔ Continue? … yes
  
   success  Successfully updated TypeScript settings
```

Insert a new component (*Counter.tsx*) into *src/components*:

```jsx
import * as React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = React.useCallback(() => setCount((c) => c + 1), []);

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
```

Now reference it in the *src/pages/index.astro*:

```js
import Counter from '../components/Counter';
```

and bring it to the page via:

```jsx
<Counter />
```

Play around with directives such as `client:load` or `client:visible` to make it interactive. To see how / when JavaScript is loaded use:

```sh
npm run build && npm run preview
```

While `npm run dev` runs the dev server, which is pretty much still a SPA, the build mode creates the MPA that Astro is known for. Make sure to run `preview` for seeing the build artifacts in action.

## Third Example (Server)

Let's run in *03-server*:

```sh
npm create astro@latest -- --template hackernews
```

Then we fill out the survey:

```plain
$ npm create astro@latest -- --template hackernews

 astro   Launch sequence initiated.

   dir   Where should we create your new project?
         .
      ◼  tmpl Using hackernews as project template

  deps   Install dependencies?
         Yes

   git   Initialize a new git repository?
         No
      ◼  Sounds good! You can always run git init manually.

      ✔  Project initialized!
         ■ Template copied
         ■ Dependencies installed

  next   Liftoff confirmed. Explore your project!
         Run npm run dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```

Play around with server adapters such as

```js
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
	}),
});
```

or [on-demand rendering](https://docs.astro.build/en/guides/on-demand-rendering/), which can be activated in the preamble using:

```js
export const prerender = false
```

and explore what [server endpoints](https://docs.astro.build/en/guides/endpoints/) (non-*.astro* files) mean.

Further aspect worth exploring: [Server Islands](https://dev.to/nickytonline/set-sail-for-server-islands-how-they-work-and-when-to-use-them-1p76).
