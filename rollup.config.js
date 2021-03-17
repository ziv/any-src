export default {
    input: 'src/index.js',
    output: [
        {file: 'lib/bundle.es.js', format: 'es'},
        {file: 'lib/bundle.umd.js', format: 'umd'}
    ]
};
