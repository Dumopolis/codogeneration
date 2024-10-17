import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // если хотите использовать глобальные функции
    environment: "jsdom", // или 'node' в зависимости от ваших нужд
    setupFiles: "./src/openapi-typescript/setup.ts", // если нужно
    coverage: {
      exclude: ["**/setup.ts"],
    },
  },
});
