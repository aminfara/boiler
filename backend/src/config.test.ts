import { getConfig } from './config.js';

describe('getConfig', () => {
  let originalEnvironment: NodeJS.ProcessEnv;

  beforeEach(() => {
    // Store the original process.env
    originalEnvironment = { ...process.env };
  });

  afterEach(() => {
    // Restore the original process.env
    process.env = originalEnvironment;
  });

  it('should return default values if no environment variables are set', () => {
    process.env = {};
    const config = getConfig();
    expect(config.NODE_ENV).toBe('development');
    expect(config.PORT).toBe(3000);
  });

  it('should return environment variables if they are set', () => {
    process.env = {
      NODE_ENV: 'production',
      PORT: '8000',
    };
    const config = getConfig();
    expect(config.NODE_ENV).toBe('production');
    expect(config.PORT).toBe(8000);
  });

  it('should always return the application version', () => {
    const config = getConfig();
    expect(config.VERSION).toBeDefined();
  });
});
