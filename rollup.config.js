import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default {
    input: 'src/index.ts',
    output: [
        {format: 'esm', dir: 'lib'},
    ],
    plugins: [typescript()]
};
