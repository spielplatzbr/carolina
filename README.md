## Commands

After cloning and before starting developing, make sure [husky](https://github.com/typicode/husky) is setup:
```
npm run prepare
```

### For developing:
```
npm i; npm run dev
```

### For linting and prettifying the codebase:
```
npm i; npm run lint; npm run format
```

### For cleaning (`node_modules` and `dist`)
```
npm run purge 
```
## Precommit

Husky will run `npx lint-staged` before every commit, triggering eslint to run both linter and prettier on staged files. The commit itself will only be allowed if all issues are solved. This is required to keep the entire codebase uniform (e.g.: code style).

## Stack
This is a simple React + Vite + Typescript + Tailwind stack. Hot-module-reload is provided by default by Vite. Tailwind is solid and yields good development speed. Typescript is a must if dealing with crypto/fintech code. 

## Safe amount input

Refer to `amountInput.tsx` if amount input is needed. It makes sure the string value containing the amount is pure (see `useAmount.ts` as well).

## Fit for production?
- For this to be production-ready, lots of pieces are missing. For example, a testing framework should be setup and put in the CI/CD pipeline.
- Netlify CLI is kinda slow and annoying.
- At this point, [Next.js](https://nextjs.org/) is so mature and validated, that the question should be *why NOT use it?* So I would naturally argue to in favor of using it.
- Not optimized for mobile (input html element is specially full of gotchas when on mobile).
- Branches are not protected.
- And so many more...

## Notes 
- I didn't follow the two-repos-instruction because I thought of it as silly. It can be done using symlink via `npm link` (and Vite is smart enough to react on changes inside a symlinked folder).
- Also the cost of maintaining a healthy repo should not be overlooked, hence monorepos are the de facto way to go (i.e.: there must be a good reason for not going monorepo). Currently `npm workspaces` are very easy to setup. I've use it [here](https://github.com/ignite-hq/ignite.com/blob/main/package.json#L49-L52) and [here](https://github.com/ignite/web/blob/v4/package.json#L29-L35).
- Please take a look on these two repos I've recently setup and worked on (while at Ignite): [ignite.com](https://github.com/ignite-hq/ignite.com/) and [Ignite Template](https://github.com/ignite/web/tree/v4/packages). 
- Last but not least, [here](https://gist.github.com/marinhoarthur/e62ab2f1d6f59559ad763590b6e0465d) are some things I would like to show. 