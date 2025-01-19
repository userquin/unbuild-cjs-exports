# Testing CJS exports with unbuild

There are some edge cases with CJS exports that are not supported by unbuild. This is a test to see how unbuild handles these edge cases.

Check https://github.com/unjs/unbuild/pull/475 for further details.

This repository using `unbuild v3.1.0`, using `3.2.0+` will not work since the dts files are wrongly generated for `package-a`, package-c` and `package-d`: checkout `wrong-cjs` branch.

## Check the output

To check the output, run:

```shell
pnpm install
```

then

```shell
pnpm build && pnpm test:attw
```

