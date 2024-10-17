import { defineConfig } from 'orval';
 
export default defineConfig({
  petstore: {
    input: './openapi.yaml',
    output: {
      target: './src/orval',
      mock: true,
      mode: 'tags-split'
    },

  },
});
