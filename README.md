# Vue Component Source

**Vue Component Source** is a global Vue.js mixin which identifies components
tag and source path by adding HTML comments. Available in DevTools.

[DEMO](https://alex-lit.github.io/vue-component-source/)

![banner](https://raw.githubusercontent.com/alex-lit/vue-component-source/master/public/screenshot.png)

## Installation

```bash
npm i @alexlit/vue-component-source -D
```

## Usage

```ts
import Vue from 'vue';

import VueComponentSource from '@alexlit/vue-component-source';

Vue.use(VueComponentSource, {
  enabled: process.env.NODE_ENV === 'development',
});
```

### Other Solutions

- [vue-source](https://github.com/davestewart/vue-source)
