// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { RegistrationPostData, RegistrationPostError, RegistrationPostResponse, LoginUserData, LoginUserError, LoginUserResponse, GetUserData, GetUserError, GetUserResponse, UpdateUserData, UpdateUserError, UpdateUserResponse, DeleteUserData, DeleteUserError, DeleteUserResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Регистрация пользователя
 * Эндпоинт для регистрации нового пользователя с валидацией полей.
 */
export const registrationPost = <ThrowOnError extends boolean = false>(options: Options<RegistrationPostData, ThrowOnError>) => { return (options?.client ?? client).post<RegistrationPostResponse, RegistrationPostError, ThrowOnError>({
    ...options,
    url: '/register'
}); };

/**
 * Авторизация пользователя
 * Эндпоинт для авторизации пользователя с проверкой email/телефона и пароля.
 */
export const loginUser = <ThrowOnError extends boolean = false>(options: Options<LoginUserData, ThrowOnError>) => { return (options?.client ?? client).post<LoginUserResponse, LoginUserError, ThrowOnError>({
    ...options,
    url: '/login'
}); };

/**
 * Получение пользователя по ID
 * Возвращает информацию о пользователе по ID.
 */
export const getUser = <ThrowOnError extends boolean = false>(options: Options<GetUserData, ThrowOnError>) => { return (options?.client ?? client).get<GetUserResponse, GetUserError, ThrowOnError>({
    ...options,
    url: '/users/{id}'
}); };

/**
 * Обновление данных пользователя по ID
 * Обновляет данные пользователя по ID.
 */
export const updateUser = <ThrowOnError extends boolean = false>(options: Options<UpdateUserData, ThrowOnError>) => { return (options?.client ?? client).put<UpdateUserResponse, UpdateUserError, ThrowOnError>({
    ...options,
    url: '/users/{id}'
}); };

/**
 * Удаление пользователя по ID
 * Удаляет пользователя по ID.
 */
export const deleteUser = <ThrowOnError extends boolean = false>(options: Options<DeleteUserData, ThrowOnError>) => { return (options?.client ?? client).delete<DeleteUserResponse, DeleteUserError, ThrowOnError>({
    ...options,
    url: '/users/{id}'
}); };