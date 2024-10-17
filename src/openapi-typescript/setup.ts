import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll } from "vitest";

export const server = setupServer();

beforeAll(() => {
  console.log("Запуск сервера MSW");
  server.listen({ onUnhandledRequest: "warn" });
});

// Сброс обработчиков после каждого теста
afterEach(() => {
  console.log("AFTER");
  server.resetHandlers();
});

// Остановка сервера после завершения всех тестов
afterAll(() => server.close());
