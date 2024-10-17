/* tslint:disable */
/* eslint-disable */
/**
 * Fake server API
 * API для тестирования кодогенерации
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface LoginUser400ResponseErrorsInner
 */
export interface LoginUser400ResponseErrorsInner {
    /**
     * 
     * @type {string}
     * @memberof LoginUser400ResponseErrorsInner
     */
    'msg'?: LoginUser400ResponseErrorsInnerMsgEnum;
    /**
     * 
     * @type {string}
     * @memberof LoginUser400ResponseErrorsInner
     */
    'param'?: string;
    /**
     * 
     * @type {string}
     * @memberof LoginUser400ResponseErrorsInner
     */
    'location'?: string;
}

export const LoginUser400ResponseErrorsInnerMsgEnum = {
    InvalidEmailFormat: 'Invalid email format',
    InvalidPhoneNumber: 'Invalid phone number',
    EitherEmailOrPhoneIsRequired: 'Either email or phone is required',
    PasswordMustBeAtLeast6CharactersLong: 'Password must be at least 6 characters long'
} as const;

export type LoginUser400ResponseErrorsInnerMsgEnum = typeof LoginUser400ResponseErrorsInnerMsgEnum[keyof typeof LoginUser400ResponseErrorsInnerMsgEnum];

