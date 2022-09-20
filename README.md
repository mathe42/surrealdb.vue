# Surrealdb.vue
This is a surrealdb client build for VueJS!

> This is WIP. If you have ideas / suggestions please open an issue!

## Install
Simpy install the `surrealdb.vue` npm-package. We require the install of the `vue` (version >= 3.2) and `surrealdb.js` (version >= 0.4) packages.

```sh
# npm
npm i surrealdb.vue surrealdb.js vue

# pnpm
pnpm i surrealdb.vue surrealdb.js vue

# yarn
yarn add surrealdb.vue surrealdb.js vue
```

## API
### Client
We export the Client of `surrealdb.js` nearly as is. For more info look at the docs of `surrealdb.js`.

### Functions
We export functions `query` and `queryLive` that return reactive data. 

> Note: `queryLive` is currently a copy of `query` and is currently not live!

The return has the form of 

```ts
interface VueReturn<T> {
    loading: Ref<boolean>;
    data: ShallowRef<T[] | null>;
    error: Ref<any>;
    reload: () => void;
}
```