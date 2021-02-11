# @inc/original-emoji

> NTT DoCoMo emoji (698 of 'em)



## Installation

```sh
npm i @inc/original-emoji
```

## Usage

```svelte
<script>
  // import all icons
  import * as Icon from "@inc/original-emoji";

  // or, a select few
  import { Emoji224, Emoji225 } from "@inc/original-emoji";
</script>

<Hoverable let:hovering={active}>
  <Icon.Emoji224/>

  <div class:active>
    {#if active}
      <Emoji225/>
    {:else}
      <Emoji224/>
    {/if}
  </div>
</Hoverable>
```

## Tests

```sh
# Runs all test scripts
npm test

# Makes sure dependencies are up to date
npm run test:dependencies

# Ensures Svelte files are devoid of errors…
# This command takes a couple minutes to complete
npm run test:svelte
```

## Notes

If you just want SVGs, check out the [`raw` folder](/raw). The process looked like this: Illustrator files > Affinity Designer (optimization and export) > SVG > further optimization. Also, this module is intended for use within Svelte-based projects. If this works for your JavaScript framework of choice, sweet. If not, too bad. Love yourself. Try [Svelte](https://svelte.dev).

## Thanks

- [NTT DoCoMo](https://www.nttdocomo.co.jp/service/developer/smart_phone/make_contents/pictograph/download)
- viewers like you
