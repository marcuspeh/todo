# todo

## Usage

1) Install dependency: ```npm install```
2) Create an ```.env``` file with the following fields
```
ENVIRONMENT=dev

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=poostgres
DB_DATABASE=todo

PUBLIC_KEY="RSA PUBLIC KEY"
PRIVATE_KEY="RSA PRIVATE KEY"

API_KEY="Very secret key"
JWT_SECRET="VERY SECRET"
MAX_USER_TOKEN_VALIDITY_SECONDS = 3600
```
3) Run migrations: ```npm run migration```
4) To run the server: ```npm run start```


## Endpoints

| Endpoints | Method | Access | Description|
| --- | --- | --- | --- |
| /api/crypto/getPublicKey | GET | ALL | Gets public key to encrypt password |
| /api/crypto/encrypt | POST | DEV | RSA encrypts a plaintext using public key |
| /api/crypto/decrypt | POST | DEV | RSA decrypts a ciphertext using private key |
| /api/crypto/hashPassword | POST | DEV | Hashes a password with salt |
| /api/crypto/checkPassword | POST | DEV | Checks if a hashed password matches the hash |
| |
| /api/user/register | POST | ALL | Registers a new user |
| /api/user/login | POST | ALL | Logs in a user |
| /api/user/logout | POST | ALL | Logout a user |
| |
| /api/todo/getAll | GET | AUTH | Retrieves all todos |
| /api/todo/getUndone | GET | Auth | Retrieves all undone todos |
| /api/todo/getDone | GET | Auth | Retrieves all done todos |
| |
| /api/todo/createNew | POST | Auth | Creates a new todo |
| |
| /api/todo/get | GET | Auth | Retrives todo with the specified id |
| /api/todo/delete | DELETE | Auth | Delete todo with the specified id |
| /api/todo/markDone | PATCH | Auth | Mark todo with the specified id as done |
| /api/todo/markUndone | PATCH | Auth | Mark todo with the specified id as undone |
| /api/todo/update | PATCH | Auth | Updates description of todo with the specified id |

---

## API: /api/crypto/getPublicKey

### Description: 
Gets public key to encrypt password

### Request body:
None

### Reponse:
```json
{
    "publicKey": "Key is here"
}
```

### Errors: 
None

---

## API: /api/crypto/encrypt

### Description: 
RSA encrypts a plaintext using public key

### Request body:
```json
{
    "text": "Plaintext"
}
```

### Reponse:
```json
{
    "ciphertext": "Ciphertext"
}
```

### Errors: 
E0010: Request body format is wrong

---

## API: /api/crypto/decrypt

### Description: 
RSA decrypts a ciphertext using private key

### Request body:
```json
{
    "text": "Ciphertext"
}
```

### Reponse:
```json
{
    "plainText": "Plaintext"
}
```

### Errors: 
E0010: Request body format is wrong

---

## API: /api/crypto/hashPassword

### Description: 
Hashes a password with salt

### Request body:
```json
{
    "password": "password"
}
```

### Reponse:
```json
{
    "passwordHash": "passwordHash"
}
```

### Errors: 
E0010: Request body format is wrong

---

## API: /api/crypto/checkPassword

### Description: 
Checks if a hashed password matches the hash

### Request body:
{
    "password": "password",
    "passwordHash": "passwordHash"
}
```

### Reponse:
```json
{
    message: "Success"
}
```

### Errors: 
E0010: Request body format is wrong
E0300: Invalid password

---

## API: /api/user/register

### Description: 
Registers a new user

### Request body:
```json
{
    "name": "name",
    "email": "email",
    "password": "encrypted password"
}
```

### Reponse:
```json
{
    "user": {
        "name": "name",
        "email": "email"
    }
}
```

### Errors: 
E0010: Request body format is wrong
E0302: Email already exists

---

## API: /api/user/login

### Description: 
Logs in a user

### Request body:
```json
{
    "email": "email",
    "password": "encrypted password"
}
```

### Reponse:
```json
{
    "user": {
        "name": "name",
        "email": "email"
    }
}
```

### Errors: 
E0010: Request body format is wrong
E0300: Invalid credentials

---

## API: /api/user/logout

### Description: 
Logout a user

### Request body:
None

### Reponse:
```json
{
    "message": "Goodbye"
}
```

### Errors: 
None
---

## API: /api/todo/getAll

### Description: 
Retrieves all todos

### Request body:
None

### Reponse:
```json
{
    "data": [
        {
            "id": 7,
            "task": "hello",
            "done": false,
            "create_at": "2022-06-12T08:38:28.810Z",
            "updated_at": "2022-06-12T08:38:28.810Z"
        }
    ]
}
```

### Errors: 
None

---

## API: /api/todo/getUndone

### Description: 
Retrieves all undone todos

### Request body:
None

### Reponse:

```json
{
    "data": [
        {
            "id": 7,
            "task": "hello",
            "done": false,
            "create_at": "2022-06-12T08:38:28.810Z",
            "updated_at": "2022-06-12T08:38:28.810Z"
        }
    ]
}
```

### Errors: 
None

---

## API: /api/todo/getDone

### Description: 
Retrieves all done todos

### Request body:
None

### Reponse:
```json
{
    "data": [
        {
            "id": 7,
            "task": "hello",
            "done": true,
            "create_at": "2022-06-12T08:38:28.810Z",
            "updated_at": "2022-06-12T08:38:28.810Z"
        }
    ]
}
```

### Errors: 
None

---

## API: /api/todo/createNew

### Description: 
Creates a new todo

### Request body:
```json
{
    "task": "Your task goes here"
}
```

### Reponse:
{
    "data": {
        "task": "Your task goes here again",
        "id": 14,
        "done": false,
        "create_at": "2022-06-12T10:37:03.008Z",
        "updated_at": "2022-06-12T10:37:03.008Z"
    }
}

### Errors: 
E0010: Request body format is wrong

---

## API: /api/todo/get

### Description: 
Retrives todo with the specified id

### Request body:
```json
{
    "id": "Task id goes here"
}
```

### Reponse:
{
    "data": {
        "id": 4,
        "task": "Updated task",
        "done": true,
        "create_at": "2022-06-12T08:08:37.361Z",
        "updated_at": "2022-06-12T08:08:37.361Z"
    }
}

### Errors: 
E0010: Request body format is wrong

---

## API: /api/todo/delete

### Description: 
Delete todo with the specified id

### Request body:
```json
{
    "id": "Task id goes here"
}
```

### Reponse:
```json
{
    "message": "Deleted"
}
```

### Errors: 
E0010: Request body format is wrong

---

## API: /api/todo/markDone

### Description: 
Mark todo with the specified id as done

### Request body:
```json
{
    "id": "Task id goes here"
}
```

### Reponse:
```json
{
    "data": {
        "id": 4,
        "task": "Your task goes here again too",
        "done": true,
        "create_at": "2022-06-12T08:08:37.361Z",
        "updated_at": "2022-06-12T08:08:37.361Z"
    }
}
```

### Errors: 
E0010: Request body format is wrong

---

## API: /api/todo/markUndone

### Description: 
Mark todo with the specified id as undone

### Request body:
```json
{
    "id": "Task id goes here"
}
```

### Reponse:
```json
{
    "data": {
        "id": 4,
        "task": "Your task goes here again too",
        "done": false,
        "create_at": "2022-06-12T08:08:37.361Z",
        "updated_at": "2022-06-12T08:08:37.361Z"
    }
}
```

### Errors: 
E0010: Request body format is wrong

---

## API: /api/todo/update

### Description: 
Updates description of todo with the specified id

### Request body:
```json
{
    "id": "Task id goes here",
    "task": "Updated task goes here"
}
```

### Reponse:
```json
{
    "data": {
        "id": 4,
        "task": "Your task goes here again too",
        "done": false,
        "create_at": "2022-06-12T08:08:37.361Z",
        "updated_at": "2022-06-12T08:08:37.361Z"
    }
}
```

### Errors: 
E0010: Request body format is wrong
