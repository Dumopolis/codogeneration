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
 * @interface UpdateUser400ResponseErrorsInner
 */
export interface UpdateUser400ResponseErrorsInner {
    /**
     * 
     * @type {string}
     * @memberof UpdateUser400ResponseErrorsInner
     */
    'msg'?: UpdateUser400ResponseErrorsInnerMsgEnum;
}

export const UpdateUser400ResponseErrorsInnerMsgEnum = {
    InvalidEmailFormat: 'Invalid email format',
    InvalidPhoneNumber: 'Invalid phone number',
    PasswordMustBeAtLeast6CharactersLong: 'Password must be at least 6 characters long'
} as const;

export type UpdateUser400ResponseErrorsInnerMsgEnum = typeof UpdateUser400ResponseErrorsInnerMsgEnum[keyof typeof UpdateUser400ResponseErrorsInnerMsgEnum];

