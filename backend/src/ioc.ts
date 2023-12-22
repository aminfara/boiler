import { getConfig } from './config.js';

/**
 * A purpose-built IoC container.
 */
const iocContainer = {
  config: getConfig(),
};

export type IocContainer = typeof iocContainer;

export function getIocContainer(): IocContainer {
  return iocContainer;
}
