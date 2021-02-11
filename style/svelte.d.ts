declare module "*.svelte" {
  import { SvelteComponent } from "svelte/internal";

  export type Props = Record<string, any>;

  export interface ComponentOptions {
    anchor?: Element;
    hydrate?: boolean;
    intro?: boolean;
    props?: Props;
    target: Element;
  }

  export default class extends SvelteComponent {
    constructor(options: ComponentOptions);
  }
}
