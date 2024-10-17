import { createOpenApiHttp } from "openapi-msw";
import { paths } from "./api"; // импортируем сгенерированные типы OpenAPI

export const http = createOpenApiHttp<paths>({
  baseUrl: "http://localhost:8080",
});

export const successHandler = http.get(
  "/users/{id}",
  async ({ response, request }) => {
    console.log("Запрос на:", request.url);

    return response(200).json({
      user: {
        id: 1,
        email: "qwer@mail.ru",
      },
    });
  }
);

export const errorHandler = http.get("/users/{id}", async ({ response }) => {
  const errors = [{ msg: "User ID must be an integer" as const }];
  return response(400).json({
    errors,
  });
});
