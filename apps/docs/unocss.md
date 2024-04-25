---
outline: deep
---

# @auto-config/uno

Some individualistic custom configurations for unocss

## Install

```bash
npm i @auto-configs/uno -D
```

## Usage

```ts
import { defineUnocssConfig } from "@auto-configs/uno";

export default defineUnocssConfig({
  // ...your configs
});
```

## Feature

### Shortcuts

used short word replace some unocss.

- fc: flex items-center
- fcc: flex items-center justify-center
- fsc: flex items-start justify-center
- flex-col-wrap: flex flex-col flex-wrap
- fb: flex justify-between
- fsb: flex items-start justify-between
- fcb: flex items-center justify-between
- feb: flex items-end justify-between

- hp: hover:cursor-pointer
- hl: hover:underline
- hc-your_like_color: hover:c-your_like_color
- hbg-your_like_color: hover:bg-your_like_color

- cp: cursor-pointer

you can used in your page like below:

```html
<div class="fcc">
  <div class="fc">
    <div>
      <span class="cp hc-gray" icon-home />
    </div>
    <div class="hbg-red"></div>
  </div>
</div>
```

### rules

Some more advanced uses in rules setting.

1. control style of child nodes

for example, `hover>.child:hidden`, hidden node that class is child when hover parent node.

```html
<div class="hover>.child:hidden">
  <div class="child">
    <!-- ...something -->
  </div>
</div>
```
