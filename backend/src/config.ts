import { z } from 'zod';
import package_ from '../package.json' assert { type: 'json' };

/**
 * This schema is used to validate the environment variables.
 * If the validation fails, the application will crash.
 */
const environmentSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.number().default(3000),
});

/**
 * This object contains the application configuration.
 */
export const config = {
  VERSION: package_.version,
  ...environmentSchema.parse(process.env),
};

export type Config = typeof config;
