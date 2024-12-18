/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
    "/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Авторизация пользователя
         * @description Эндпоинт для авторизации пользователя с проверкой email/телефона и пароля.
         */
        post: operations["loginUser"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Регистрация пользователя
         * @description Эндпоинт для регистрации нового пользователя с валидацией полей.
         */
        post: operations["registration-post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Получение пользователя по ID
         * @description Возвращает информацию о пользователе по ID.
         */
        get: operations["getUser"];
        /**
         * Обновление данных пользователя по ID
         * @description Обновляет данные пользователя по ID.
         */
        put: operations["updateUser"];
        post?: never;
        /**
         * Удаление пользователя по ID
         * @description Удаляет пользователя по ID.
         */
        delete: operations["deleteUser"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    loginUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @description Email пользователя. Либо это поле, либо телефон должно быть заполнено.
                     * @example test@example.com
                     */
                    email?: string;
                    /**
                     * @description Пароль пользователя. Обязательное поле.
                     * @example password123
                     */
                    password: string;
                    /**
                     * @description Телефон пользователя. Либо это поле, либо email должно быть заполнено.
                     * @example +1234567890
                     */
                    phone?: string;
                };
            };
        };
        responses: {
            /** @description Успешная авторизация */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Login successful */
                        message?: string;
                        /**
                         * @description JWT токен для дальнейшей аутентификации
                         * @example mock-jwt-token
                         */
                        token?: string;
                    };
                };
            };
            /** @description Ошибка валидации полей */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        errors?: {
                            /** @example body */
                            location?: string;
                            /** @enum {string} */
                            msg?: "Invalid email format" | "Invalid phone number" | "Either email or phone is required" | "Password must be at least 6 characters long";
                            /** @example password */
                            param?: string;
                        }[];
                    };
                };
            };
            /** @description Ошибка аутентификации (неправильный email/пароль) */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @enum {string} */
                        message?: "Email not found" | "Incorrect password";
                    };
                };
            };
        };
    };
    "registration-post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Уникальный ID клиента. Обязательное поле.
                     * @example 123
                     */
                    clientId: number;
                    /**
                     * Format: email
                     * @description Email пользователя. Либо это поле, либо телефон должно быть заполнено.
                     * @example test@example.com
                     */
                    email?: string;
                    /**
                     * @description Пароль пользователя. Минимум 6 символов.
                     * @example password123
                     */
                    password: string;
                    /**
                     * @description Телефон пользователя. Либо это поле, либо email должно быть заполнено.
                     * @example +1234567890
                     */
                    phone?: string;
                };
            };
        };
        responses: {
            /** @description Успешная регистрация */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data?: {
                            /** @example 123 */
                            clientId?: number;
                            /** @example test@example.com */
                            email?: string | null;
                            /** @example +1234567890 */
                            phone?: string | null;
                        };
                        /** @example Registration successful */
                        message?: string;
                    };
                };
            };
            /** @description Ошибка валидации */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        errors?: {
                            /** @example body */
                            location?: string;
                            /** @example Password must be at least 6 characters long */
                            msg?: string;
                            /** @example password */
                            param?: string;
                        }[];
                    };
                };
            };
        };
    };
    getUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID пользователя */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешное получение данных пользователя */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        user?: {
                            email?: string;
                            id: number;
                            phone?: string;
                        };
                    };
                };
            };
            /** @description Ошибка валидации ID */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        errors?: {
                            /** @enum {string} */
                            msg?: "User ID must be an integer";
                        }[];
                    };
                };
            };
            /** @description Пользователь не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example User not found */
                        message?: string;
                    };
                };
            };
        };
    };
    updateUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID пользователя */
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @description Email пользователя
                     */
                    email?: string;
                    /** @description Пароль пользователя */
                    password?: string;
                    /** @description Телефон пользователя */
                    phone?: string;
                };
            };
        };
        responses: {
            /** @description Успешное обновление данных пользователя */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example User updated successfully */
                        message?: string;
                        user?: {
                            email?: string;
                            id?: number;
                            password?: string;
                            phone?: string;
                        };
                    };
                };
            };
            /** @description Ошибка валидации данных */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        errors?: {
                            /** @enum {string} */
                            msg?: "Invalid email format" | "Invalid phone number" | "Password must be at least 6 characters long";
                        }[];
                    };
                };
            };
            /** @description Пользователь не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example User not found */
                        message?: string;
                    };
                };
            };
        };
    };
    deleteUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID пользователя */
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Успешное удаление пользователя */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example User deleted successfully */
                        message?: string;
                    };
                };
            };
            /** @description Ошибка валидации ID */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        errors?: {
                            /** @enum {string} */
                            msg?: "User ID must be an integer";
                        }[];
                    };
                };
            };
            /** @description Пользователь не найден */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example User not found */
                        message?: string;
                    };
                };
            };
        };
    };
}
