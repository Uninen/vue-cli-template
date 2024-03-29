# This Repository is Unmaintained

As of 2021 this repo has been unmaintained due to the existence of Vite and [vite-ts-tailwind-starter](https://github.com/Uninen/vite-ts-tailwind-starter). You should use either an official vue-cli template or the Vite starter (which has the same but upgraded and maintained features) instead of this one.

----

![check-code-coverage](https://gitlab.com/uninen/vue-cli-template/badges/trunk/coverage.svg)

This repository is [hosted at GitLab](https://gitlab.com/uninen/vue-cli-template/) and mirrored to GitHub.

# Opinionated Vue CLI Template

- Vue 3
- Vue router
- Vuex
- TypeScript
- Tailwind CSS 2.0 w/ plugins
  - `@tailwindcss/aspect-ratio`
  - `@tailwindcss/typography`
  - `@tailwindcss/forms`
- Cypress.io e2e tests (w/ coverage)
- GitLab CI
  - Run tests on push
- Github Actions
  - Run tests on push
  - Run Dependabot weekly

## Project setup

```
yarn install
```

### Starts development server

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
