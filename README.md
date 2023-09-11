# unplugin-preset-vue

[![NPM version](https://img.shields.io/npm/v/unplugin-preset-vue?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-preset-vue)

This is a preset library for Vue's `unplugin`, which integrates commonly used `unplugin` libraries such as `unplugin-vue`, `unplugin-auto-import`, `unplugin-vue-components`, etc. You can **flexibly enable** a specific plugin based on your needs and maintain compatibility with the original configuration of the plugin.  

Inspire by: [unocss-preset-useful](https://github.com/unpreset/unocss-preset-useful)

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

## Usage

<details>
<summary> Vue</summary><br>

The documents: [unplugin-vue](https://github.com/unplugin/unplugin-vue)

<br></details>



<details>
<summary>Auto Import</summary><br>

Default options:
```js
const DEFAULT_OPTIONS = {
  imports: ['vue'],
  dts: 'src/auto-imports.d.ts',
  vueTemplate: true,
}
```

The documents: [unplugin-auto-import](https://github.com/unplugin/unplugin-auto-import)

<br></details>


<details>
<summary>Vue Components</summary><br>

Default options:
```js
const DEFAULT_OPTIONS = {
  // allow auto load markdown components under `./src/components/`
  extensions: ['vue', 'md'],
  // allow auto import and register components used in markdown
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  dts: 'src/components.d.ts',
}
```

The documents: [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)

<br></details>



<details>
<summary>Icons</summary><br>

The documents: [unplugin-icons](https://github.com/unplugin/unplugin-icons)

<br></details>
