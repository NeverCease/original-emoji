


///  I M P O R T

import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import { terser } from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";



///  E X P O R T

export default {
  external: [
    "svelte/internal"
  ],
  input: "style/index.ts",
  output: {
    file: "build/index.js",
    format: "cjs"
  },
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
    }),
    commonjs(),
    typescript({
      include: ["./svelte.d.ts"],
      moduleResolution: "node"
    }),
    terser()
  ]
};
