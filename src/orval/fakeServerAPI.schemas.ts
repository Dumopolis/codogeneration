/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * Fake server API
 * API для тестирования кодогенерации
 * OpenAPI spec version: 1.0.0
 */
export type DeleteUser404 = {
  message?: string;
};

export type DeleteUser400ErrorsItemMsg = typeof DeleteUser400ErrorsItemMsg[keyof typeof DeleteUser400ErrorsItemMsg];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const DeleteUser400ErrorsItemMsg = {
  User_ID_must_be_an_integer: 'User ID must be an integer',
} as const;

export type DeleteUser400ErrorsItem = {
  msg?: DeleteUser400ErrorsItemMsg;
};

export type DeleteUser400 = {
  errors?: DeleteUser400ErrorsItem[];
};

export type DeleteUser200 = {
  message?: string;
};

export type UpdateUser404 = {
  message?: string;
};

export type UpdateUser400ErrorsItemMsg = typeof UpdateUser400ErrorsItemMsg[keyof typeof UpdateUser400ErrorsItemMsg];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const UpdateUser400ErrorsItemMsg = {
  Invalid_email_format: 'Invalid email format',
  Invalid_phone_number: 'Invalid phone number',
  Password_must_be_at_least_6_characters_long: 'Password must be at least 6 characters long',
} as const;

export type UpdateUser400ErrorsItem = {
  msg?: UpdateUser400ErrorsItemMsg;
};

export type UpdateUser400 = {
  errors?: UpdateUser400ErrorsItem[];
};

export type UpdateUser200User = {
  email?: string;
  id?: number;
  password?: string;
  phone?: string;
};

export type UpdateUser200 = {
  message?: string;
  user?: UpdateUser200User;
};

export type UpdateUserBody = {
  /** Email пользователя */
  email?: string;
  /** Пароль пользователя */
  password?: string;
  /** Телефон пользователя */
  phone?: string;
};

export type GetUser404 = {
  message?: string;
};

export type GetUser400ErrorsItemMsg = typeof GetUser400ErrorsItemMsg[keyof typeof GetUser400ErrorsItemMsg];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GetUser400ErrorsItemMsg = {
  User_ID_must_be_an_integer: 'User ID must be an integer',
} as const;

export type GetUser400ErrorsItem = {
  msg?: GetUser400ErrorsItemMsg;
};

export type GetUser400 = {
  errors?: GetUser400ErrorsItem[];
};

export type GetUser200User = {
  email?: string;
  id?: number;
  password?: string;
  phone?: string;
};

export type GetUser200 = {
  user?: GetUser200User;
};

export type LoginUser401Message = typeof LoginUser401Message[keyof typeof LoginUser401Message];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoginUser401Message = {
  Email_not_found: 'Email not found',
  Incorrect_password: 'Incorrect password',
} as const;

export type LoginUser401 = {
  message?: LoginUser401Message;
};

export type LoginUser400ErrorsItemMsg = typeof LoginUser400ErrorsItemMsg[keyof typeof LoginUser400ErrorsItemMsg];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const LoginUser400ErrorsItemMsg = {
  Invalid_email_format: 'Invalid email format',
  Invalid_phone_number: 'Invalid phone number',
  Either_email_or_phone_is_required: 'Either email or phone is required',
  Password_must_be_at_least_6_characters_long: 'Password must be at least 6 characters long',
} as const;

export type LoginUser400ErrorsItem = {
  location?: string;
  msg?: LoginUser400ErrorsItemMsg;
  param?: string;
};

export type LoginUser400 = {
  errors?: LoginUser400ErrorsItem[];
};

export type LoginUser200 = {
  message?: string;
  /** JWT токен для дальнейшей аутентификации */
  token?: string;
};

export type LoginUserBody = {
  /** Email пользователя. Либо это поле, либо телефон должно быть заполнено. */
  email?: string;
  /** Пароль пользователя. Обязательное поле. */
  password: string;
  /** Телефон пользователя. Либо это поле, либо email должно быть заполнено. */
  phone?: string;
};

export type RegistrationPost400ErrorsItem = {
  location?: string;
  msg?: string;
  param?: string;
};

export type RegistrationPost400 = {
  errors?: RegistrationPost400ErrorsItem[];
};

export type RegistrationPost200Data = {
  clientId?: number;
  /** @nullable */
  email?: string | null;
  /** @nullable */
  phone?: string | null;
};

export type RegistrationPost200 = {
  data?: RegistrationPost200Data;
  message?: string;
};

export type RegistrationPostBody = {
  /** Уникальный ID клиента. Обязательное поле. */
  clientId: number;
  /** Email пользователя. Либо это поле, либо телефон должно быть заполнено. */
  email?: string;
  /** Пароль пользователя. Минимум 6 символов. */
  password: string;
  /** Телефон пользователя. Либо это поле, либо email должно быть заполнено. */
  phone?: string;
};
