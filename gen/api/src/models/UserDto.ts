/* tslint:disable */
/* eslint-disable */
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    contactNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof UserDto
     */
    lastName: string;
}

export function UserDtoFromJSON(json: any): UserDto {
    return UserDtoFromJSONTyped(json, false);
}

export function UserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactNumber': !exists(json, 'contactNumber') ? undefined : json['contactNumber'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
    };
}

export function UserDtoToJSON(value?: UserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contactNumber': value.contactNumber,
        'email': value.email,
        'firstName': value.firstName,
        'lastName': value.lastName,
    };
}


