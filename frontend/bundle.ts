import * as esbuild from "esbuild";
import { globSync } from "glob";

await esbuild.build({
  entryPoints: globSync("src/**/*.ts", {
    ignore: ["src/**/*.spec.ts", "src/**/*.test.ts"],
  }),
  tsconfig: "./tsconfig.build.json",
  outdir: "./dist/",
  platform: "node",
  format: "esm",
  target: "node20",
  bundle: false,
  minify: true,
  sourcemap: "linked",
  // If needed bundling the dependencies with `require` look at https://github.com/evanw/esbuild/issues/1921
});
