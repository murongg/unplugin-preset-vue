# unplugin-preset-vue

[![NPM version](https://img.shields.io/npm/v/unplugin-preset-vue?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-preset-vue)

VuePresets template for [unplugin](https://github.com/unjs/unplugin).

## Install

```bash
npm i unplugin-preset-vue
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import VuePresets from 'unplugin-preset-vue/vite'

export default defineConfig({
  plugins: [
    VuePresets({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import VuePresets from 'unplugin-preset-vue/rollup'

export default {
  plugins: [
    VuePresets({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-preset-vue/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-preset-vue/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-preset-vue/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import VuePresets from 'unplugin-preset-vue/esbuild'

build({
  plugins: [VuePresets()],
})
```

<br></details>

## TODO

- [ ] [unplugin-vue-cssvars](https://github.com/baiwusanyu-c/unplugin-vue-cssvars)
- [ ] [unplugin-fonts](https://github.com/cssninjaStudio/unplugin-fonts)
- [ ] [unplugin-imagemin](https://github.com/ErKeLost/unplugin-imagemin)
- [ ] [unplugin-parcel-css](https://github.com/ssssota/unplugin-parcel-css)
