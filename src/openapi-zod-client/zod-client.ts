import { makeApi, Zodios, type ZodiosOptions } from "@zodios/core";
import { z } from "zod";

const registration_post_Body = z
  .object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string(),
    clientId: z.number().int(),
  })
  .strict()
  .passthrough();
const loginUser_Body = z
  .object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z.string(),
  })
  .strict()
  .passthrough();
const updateUser_Body = z
  .object({
    email: z.string().email(),
    phone: z.string(),
    password: z.string(),
  })
  .partial()
  .strict()
  .passthrough();

export const schemas = {
  registration_post_Body,
  loginUser_Body,
  updateUser_Body,
};

const endpoints = makeApi([
  {
    method: "post",
    path: "/login",
    alias: "loginUser",
    description: `Эндпоинт для авторизации пользователя с проверкой email/телефона и пароля.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: loginUser_Body,
      },
    ],
    response: z
      .object({ message: z.string(), token: z.string() })
      .partial()
      .strict()
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Ошибка валидации полей`,
        schema: z
          .object({
            errors: z.array(
              z
                .object({
                  msg: z.enum([
                    "Invalid email format",
                    "Invalid phone number",
                    "Either email or phone is required",
                    "Password must be at least 6 characters long",
                  ]),
                  param: z.string(),
                  location: z.string(),
                })
                .partial()
                .strict()
                .passthrough()
            ),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 401,
        description: `Ошибка аутентификации (неправильный email/пароль)`,
        schema: z
          .object({
            message: z.enum(["Email not found", "Incorrect password"]),
          })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
  },
  {
    method: "post",
    path: "/register",
    alias: "registration-post",
    description: `Эндпоинт для регистрации нового пользователя с валидацией полей.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: registration_post_Body,
      },
    ],
    response: z
      .object({
        message: z.string(),
        data: z
          .object({
            email: z.string().nullable(),
            phone: z.string().nullable(),
            clientId: z.number().int(),
          })
          .partial()
          .strict()
          .passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Ошибка валидации`,
        schema: z
          .object({
            errors: z.array(
              z
                .object({
                  msg: z.string(),
                  param: z.string(),
                  location: z.string(),
                })
                .partial()
                .strict()
                .passthrough()
            ),
          })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
  },
  {
    method: "get",
    path: "/users/:id",
    alias: "getUser",
    description: `Возвращает информацию о пользователе по ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({
        user: z
          .object({
            id: z.number().int(),
            email: z.string(),
            phone: z.string(),
            password: z.string(),
          })
          .partial()
          .strict()
          .passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Ошибка валидации ID`,
        schema: z
          .object({
            errors: z.array(
              z
                .object({ msg: z.literal("User ID must be an integer") })
                .partial()
                .strict()
                .passthrough()
            ),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 404,
        description: `Пользователь не найден`,
        schema: z
          .object({ message: z.string() })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
  },
  {
    method: "put",
    path: "/users/:id",
    alias: "updateUser",
    description: `Обновляет данные пользователя по ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "body",
        type: "Body",
        schema: updateUser_Body,
      },
      {
        name: "id",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({
        message: z.string(),
        user: z
          .object({
            id: z.number().int(),
            email: z.string(),
            phone: z.string(),
            password: z.string(),
          })
          .partial()
          .strict()
          .passthrough(),
      })
      .partial()
      .strict()
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Ошибка валидации данных`,
        schema: z
          .object({
            errors: z.array(
              z
                .object({
                  msg: z.enum([
                    "Invalid email format",
                    "Invalid phone number",
                    "Password must be at least 6 characters long",
                  ]),
                })
                .partial()
                .strict()
                .passthrough()
            ),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 404,
        description: `Пользователь не найден`,
        schema: z
          .object({ message: z.string() })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
  },
  {
    method: "delete",
    path: "/users/:id",
    alias: "deleteUser",
    description: `Удаляет пользователя по ID.`,
    requestFormat: "json",
    parameters: [
      {
        name: "id",
        type: "Path",
        schema: z.number().int(),
      },
    ],
    response: z
      .object({ message: z.string() })
      .partial()
      .strict()
      .passthrough(),
    errors: [
      {
        status: 400,
        description: `Ошибка валидации ID`,
        schema: z
          .object({
            errors: z.array(
              z
                .object({ msg: z.literal("User ID must be an integer") })
                .partial()
                .strict()
                .passthrough()
            ),
          })
          .partial()
          .strict()
          .passthrough(),
      },
      {
        status: 404,
        description: `Пользователь не найден`,
        schema: z
          .object({ message: z.string() })
          .partial()
          .strict()
          .passthrough(),
      },
    ],
  },
]);

export const api = new Zodios(endpoints);

export function createApiClient(baseUrl: string, options?: ZodiosOptions) {
  return new Zodios(baseUrl, endpoints, options);
}
