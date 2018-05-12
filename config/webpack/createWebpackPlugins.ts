import 'jsdom-global/register';

import * as StripWhitespacePlugin from 'strip-whitespace-plugin';
import * as UglifyJsPlugin        from 'uglifyjs-webpack-plugin';
import {Plugin}                   from 'webpack';

import Behavior   from '../../src/Config/Behavior';
import Callbacks  from '../../src/Config/Callbacks';
import ClassNames from '../../src/Config/ClassNames';
import Config     from '../../src/Config/Config';
import Dom        from '../../src/Renderer/Dom';
import State      from '../../src/State/State';

import Environment from './Constants/Environment';

const createWebpackPluginsArray = (env: Environment = Environment.DEVELOPMENT): Plugin[] => {
    const isProductionEnvironment = env === Environment.PRODUCTION;
    const pluginsArray = [];

    const elementProtoKeys = Reflect.ownKeys(Element.prototype);
    const documentProtoKeys = Reflect.ownKeys(Object.getPrototypeOf(document));
    const htmlOptionProtoKeys = Reflect.ownKeys(HTMLOptionElement.prototype);
    const navigatorProtoKeys = Reflect.ownKeys(Object.getPrototypeOf(navigator));
    const nodeProtoKeys = Reflect.ownKeys(Node.prototype);
    const htmlSelectElementProtoKeys = Reflect.ownKeys(HTMLSelectElement.prototype);
    const windowKeys = Reflect.ownKeys(window);

    const behaviorKeys = Reflect.ownKeys(new Behavior());
    const callbacksKeys = Reflect.ownKeys(new Callbacks());
    const classNamesKeys = Reflect.ownKeys(new ClassNames());
    const configKeys = Reflect.ownKeys(new Config());
    const domKeys = Reflect.ownKeys(new Dom());
    const stateKeys = Reflect.ownKeys(new State());
    const stateProtoKeys = Reflect.ownKeys(State.prototype);

    if (isProductionEnvironment) pluginsArray.push(new UglifyJsPlugin({
        uglifyOptions: {
            mangle: {
                properties: {
                    builtins: false,
                    debug: true,
                    reserved: [
                        /* dom */
                        ...documentProtoKeys,
                        ...elementProtoKeys,
                        ...htmlOptionProtoKeys,
                        ...htmlSelectElementProtoKeys,
                        ...navigatorProtoKeys,
                        ...nodeProtoKeys,
                        ...windowKeys,
                        /* internal */
                        'easydropdown',
                        ...behaviorKeys,
                        ...callbacksKeys,
                        ...classNamesKeys,
                        ...configKeys,
                        ...domKeys,
                        ...stateKeys,
                        ...stateProtoKeys
                    ]
                }
            }
        }
    }));

    pluginsArray.push(new StripWhitespacePlugin());

    return pluginsArray;
};

export default createWebpackPluginsArray;