/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
  /**
   * Регистрация пользователя
   * Эндпоинт для регистрации нового пользователя с валидацией полей.
   * @returns any Успешная регистрация
   * @throws ApiError
   */
  public static registrationPost({
    requestBody,
  }: {
    requestBody: {
      /**
       * Email пользователя. Либо это поле, либо телефон должно быть заполнено.
       */
      email?: string;
      /**
       * Телефон пользователя. Либо это поле, либо email должно быть заполнено.
       */
      phone?: string;
      /**
       * Пароль пользователя. Минимум 6 символов.
       */
      password: string;
      /**
       * Уникальный ID клиента. Обязательное поле.
       */
      clientId: number;
    },
  }): CancelablePromise<{
    message?: string;
    data?: {
      email?: string | null;
      phone?: string | null;
      clientId?: number;
    };
  }> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/register',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Ошибка валидации`,
      },
    });
  }
  /**
   * Авторизация пользователя
   * Эндпоинт для авторизации пользователя с проверкой email/телефона и пароля.
   * @returns any Успешная авторизация
   * @throws ApiError
   */
  public static loginUser({
    requestBody,
  }: {
    requestBody: {
      /**
       * Email пользователя. Либо это поле, либо телефон должно быть заполнено.
       */
      email?: string;
      /**
       * Телефон пользователя. Либо это поле, либо email должно быть заполнено.
       */
      phone?: string;
      /**
       * Пароль пользователя. Обязательное поле.
       */
      password: string;
    },
  }): CancelablePromise<{
    message?: string;
    /**
     * JWT токен для дальнейшей аутентификации
     */
    token?: string;
  }> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Ошибка валидации полей`,
        401: `Ошибка аутентификации (неправильный email/пароль)`,
      },
    });
  }
}
