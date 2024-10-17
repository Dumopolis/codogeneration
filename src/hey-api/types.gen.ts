// This file is auto-generated by @hey-api/openapi-ts

export type RegistrationPostData = {
    body: {
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
    };
};

export type RegistrationPostResponse = ({
    message?: string;
    data?: {
        email?: (string) | null;
        phone?: (string) | null;
        clientId?: number;
    };
});

export type RegistrationPostError = ({
    errors?: Array<{
        msg?: string;
        param?: string;
        location?: string;
    }>;
});

export type LoginUserData = {
    body: {
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
    };
};

export type LoginUserResponse = ({
    message?: string;
    /**
     * JWT токен для дальнейшей аутентификации
     */
    token?: string;
});

export type LoginUserError = ({
    errors?: Array<{
        msg?: 'Invalid email format' | 'Invalid phone number' | 'Either email or phone is required' | 'Password must be at least 6 characters long';
        param?: string;
        location?: string;
    }>;
} | {
    message?: 'Email not found' | 'Incorrect password';
});

export type GetUserData = {
    path: {
        /**
         * ID пользователя
         */
        id: number;
    };
};

export type GetUserResponse = ({
    user?: {
        id?: number;
        email?: string;
        phone?: string;
        password?: string;
    };
});

export type GetUserError = ({
    errors?: Array<{
        msg?: 'User ID must be an integer';
    }>;
} | {
    message?: string;
});

export type UpdateUserData = {
    body: {
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
    };
    path: {
        /**
         * ID пользователя
         */
        id: number;
    };
};

export type UpdateUserResponse = ({
    message?: string;
    user?: {
        id?: number;
        email?: string;
        phone?: string;
        password?: string;
    };
});

export type UpdateUserError = ({
    errors?: Array<{
        msg?: 'Invalid email format' | 'Invalid phone number' | 'Password must be at least 6 characters long';
    }>;
} | {
    message?: string;
});

export type DeleteUserData = {
    path: {
        /**
         * ID пользователя
         */
        id: number;
    };
};

export type DeleteUserResponse = ({
    message?: string;
});

export type DeleteUserError = ({
    errors?: Array<{
        msg?: 'User ID must be an integer';
    }>;
} | {
    message?: string;
});