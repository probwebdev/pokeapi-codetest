import { defineConfig } from 'cypress';

// eslint-disable-next-line
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
