/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
  /**
   * Получение пользователя по ID
   * Возвращает информацию о пользователе по ID.
   * @returns any Успешное получение данных пользователя
   * @throws ApiError
   */
  public static getUser({
    id,
  }: {
    /**
     * ID пользователя
     */
    id: number,
  }): CancelablePromise<{
    user?: {
      id?: number;
      email?: string;
      phone?: string;
      password?: string;
    };
  }> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Ошибка валидации ID`,
        404: `Пользователь не найден`,
      },
    });
  }
  /**
   * Обновление данных пользователя по ID
   * Обновляет данные пользователя по ID.
   * @returns any Успешное обновление данных пользователя
   * @throws ApiError
   */
  public static updateUser({
    id,
    requestBody,
  }: {
    /**
     * ID пользователя
     */
    id: number,
    requestBody: {
      /**
       * Email пользователя
       */
      email?: string;
      /**
       * Телефон пользователя
       */
      phone?: string;
      /**
       * Пароль пользователя
       */
      password?: string;
    },
  }): CancelablePromise<{
    message?: string;
    user?: {
      id?: number;
      email?: string;
      phone?: string;
      password?: string;
    };
  }> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/users/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Ошибка валидации данных`,
        404: `Пользователь не найден`,
      },
    });
  }
  /**
   * Удаление пользователя по ID
   * Удаляет пользователя по ID.
   * @returns any Успешное удаление пользователя
   * @throws ApiError
   */
  public static deleteUser({
    id,
  }: {
    /**
     * ID пользователя
     */
    id: number,
  }): CancelablePromise<{
    message?: string;
  }> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/users/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Ошибка валидации ID`,
        404: `Пользователь не найден`,
      },
    });
  }
}
