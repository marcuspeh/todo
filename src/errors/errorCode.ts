/* 
4 digit Error code format
- First 2 digits:
    - 00: Generic 
    - 01: Todo
- Next 2 digits: Start with 00 and just count up
*/
export const errorCode = {
    /* Generic error code */
    UNHANDLED_ERROR: "E0000",
    INVALID_REQUEST_BODY: "E0001",
    ENTITY_VALIDATION_ERROR: "E0002",

    /* Todo error code */
    TODO_ID_INVALID: "E0100"
}