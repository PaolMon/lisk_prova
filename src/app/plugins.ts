/* eslint-disable @typescript-eslint/no-empty-function */
import { FaucetPlugin } from '@liskhq/lisk-framework-faucet-plugin';
import { Application } from 'lisk-sdk';

export const registerPlugins = (app: Application): void => {
    app.registerPlugin(FaucetPlugin);
};
