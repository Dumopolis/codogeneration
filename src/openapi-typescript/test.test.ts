import { describe, expect, it } from "vitest";
import { errorHandler, successHandler } from "./handlers";
import { getUser } from "./openapiFetch";
import { server } from "./setup";
import { mockUsers } from "../mocks";

describe("getUser", () => {
  it("должен вернуть данные пользователя при успешном запросе к серверу", async () => {
    // Используем реальный запрос к серверу (не забыть запустить сервер)
    const response = await getUser(1);
    const data = response.data;
    expect(data).toEqual({
      user: mockUsers[0],
    });
    expect(response.response.status).toBe(200);
  });
  it("должен вернуть данные пользователя при успешном запросе используя мок", async () => {
    // Используем мок хэндлер для перехвата запроса сервер воркером
    server.use(successHandler);
    const response = await getUser(1);
    const data = response.data;
    expect(data).toEqual({
      user: {
        id: 1,
        email: "qwer@mail.ru",
      },
    });
    expect(response.response.status).toBe(200);
  });

  it("должен обрабатывать ошибки ", async () => {
    // Используем мок хэндлер для перехвата запроса сервер воркером
    server.use(errorHandler);
    const response = await getUser(1);
    expect(response.response.status).toBe(400);
    expect(response.error?.errors?.[0].msg).toEqual(
      "User ID must be an integer"
    );
  });
});
