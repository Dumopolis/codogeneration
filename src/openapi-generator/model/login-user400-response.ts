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


// May contain unused imports in some cases
// @ts-ignore
import type { LoginUser400ResponseErrorsInner } from './login-user400-response-errors-inner';

/**
 * 
 * @export
 * @interface LoginUser400Response
 */
export interface LoginUser400Response {
    /**
     * 
     * @type {Array<LoginUser400ResponseErrorsInner>}
     * @memberof LoginUser400Response
     */
    'errors'?: Array<LoginUser400ResponseErrorsInner>;
}
