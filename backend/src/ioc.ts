import { config } from './config.js';

/**
 * A purpose-built IoC container.
 */
export const iocContainer = {
  config,
};

export type IocContainer = typeof iocContainer;
