import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  outDir: './dist',
  entries: [
    {
      input: 'src/index',
      name: 'index',
    },
    {
      input: 'src/node',
      name: 'node',
    },
    {
      input: 'src/web',
      name: 'web',
    },
  ],
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
});