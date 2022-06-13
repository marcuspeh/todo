/* 
4 digit Error code format
- First 2 digits:
    - 00: Generic 
    - 01: Todo
    - 02: Crypto
    - 03: User
- Next 2 digits: Start with 00 and just count up
*/
export const errorCode = {
    /* Generic error code */
    UNHANDLED_ERROR: "E0000",
    API_ONLY_AVAILABLE_ON_DEV: "E0001",

    INVALID_REQUEST_BODY: "E0010",
    ENTITY_VALIDATION_ERROR: "E0011",

    /* Todo error code */
    TODO_NOT_FOUND: "E0100",

    /* Crypto error code */
    PASSWORD_HASHING_ERROR: "E0200",

    /* User error code */
    CREDENTIALS_INVALID: "E0300",
    EMAIL_INVALID: "E0301",
    EMAIL_EXISTS: "E0302",
    PASSWORD_REQUIREMENT_NOT_MET: "E0303", 
    USER_NOT_FOUND: "E0304",
}