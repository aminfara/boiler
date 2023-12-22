import { z } from 'zod';
import package_ from '../package.json' assert { type: 'json' };

/**
 * This schema is used to validate the environment variables.
 * If the validation fails, the application will crash.
 */
const environmentSchema = z.object({
  NODE_ENV: z.string().default('development'),
  PORT: z.coerce.number().default(3000),
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getConfig() {
  return {
    VERSION: package_.version,
    ...environmentSchema.parse(process.env),
  };
}

export type Config = ReturnType<typeof getConfig>;
