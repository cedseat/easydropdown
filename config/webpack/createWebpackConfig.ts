import {resolve}       from 'path';
import {Configuration} from 'webpack';

import Environment               from './Constants/Environment';
import createWebpackPluginsArray from './createWebpackPlugins';
import typescriptRule            from './Rules/typescriptRule';

const createWebpackConfig = (env: Environment = Environment.DEVELOPMENT): Configuration => {
    const isProductionEnvironment = env === Environment.PRODUCTION;

    return {
        mode: env,
        entry: './src/umd.ts',
        output: {
            filename: isProductionEnvironment ? 'easydropdown.js' : 'easydropdown.dev.js',
            path: resolve(__dirname, '..', '..', 'bundle'),
            library: 'easydropdown',
            libraryTarget: 'umd'
        },
        devtool: 'source-map',
        optimization: {
            minimize: false
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: createWebpackPluginsArray(env),
        module: {
            rules: [
                typescriptRule
            ]
        }
    };
};

export default createWebpackConfig;