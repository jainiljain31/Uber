# User Registration API Documentation

## `/users/register` Endpoint

### **Description**
Registers a new user by creating a user account with the provided information.

---

### **HTTP Method**
`POST`

---

### **Request Body**
The request body should be in JSON format and include the following fields:

#### **Fields**
- **fullname** (object):
  - **firstname** (string): User's first name (minimum 3 characters).
  - **lastname** (string, optional): User's last name (minimum 3 characters).
- **email** (string): User's email address (must be a valid email).
- **password** (string): User's password (minimum 6 characters).
-**token**(string):JWT Token


# User Login API Documentation

## `/users/login` Endpoint

### **Description**
Authenticates a user using their email and password, returning a JWT token upon successful login.

---

### **HTTP Method**
`POST`

---

### **Endpoint**
`/users/login`

---

### **Request Body**
The request body should be in JSON format and include the following fields:
- **email** (string): User's email address (must be a valid email).
- **password** (string): User's password (minimum 6 characters).

#### **Example Request**
- `user`(object):
  - `fullname` (object).
     -`firstname` (string):User's first name (min 3 character long)
     -`lastname` (string):User's first name (min 3 character long)
- **email** (string): User's email address (must be a valid email).
- **password** (string): User's password (minimum 6 characters).
- **token**(string):JWT Token



# User Profile API Documentation

## `/users/profile` Endpoint

### **Description**
Retrieves the profile information of the currently authenticated user.

---

### **HTTP Method**
`GET`

---

### **Authentication**
Requires a valid JWT token in the `Authorization` header:  
`Authorization: Bearer <token>`

---

### **Example Response**
- **fullname** (object):
  - **firstname** (string): User's first name (minimum 3 characters).
  - **lastname** (string, optional): User's last name (minimum 3 characters).
- **email** (string): User's email address (must be a valid email).


# User Logout API Documentation

## `/users/logout` Endpoint

### **Description**
Logs out the current user and blacklists the token provided in the cookie or headers.

---

### **HTTP Method**
`GET`

---

### **Authentication**
Requires a valid JWT token in either of the following:
- `Authorization` header: `Authorization: Bearer <token>`
- Cookie: `token=<JWT>`


# Captain Registration API Documentation

## `/captains/register` Endpoint

### **Description**
Registers a new captain by creating a captain account with the provided information.

---

### **HTTP Method**
`POST`

---

### **Request Body**
The request body should be in JSON format and include the following fields:

- **fullname** (object):
  - **firstname** (string, required): Captain's first name (minimum 3 characters).
  - **lastname** (string, optional): Captain's last name (minimum 3 characters).
- **email** (string, required): Captain's email address (must be a valid email).
- **password** (string, required): Captain's password (minimum 6 characters).
- **vehicle** (object):
  - **color** (string, required): Vehicle color (minimum 3 characters).
  - **plate** (string, required): Vehicle plate number (minimum 3 characters).
  - **capacity** (number, required): Vehicle passenger capacity (minimum 1).
  - **vehicleType** (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto').

#### **Example Request**
- **captain** (object):
  - **fullname** (object):
    - **firstname** (string): Captain's first name (minimum 3 characters).
    - **lastname** (string): Captain's last name (minimum 3 characters).
  - **email** (string): Captain's email address (must be a valid email).
  - **password** (string): Captain's password (minimum 6 characters).
  - **vehicle** (object):
    - **color** (string): Vehicle color.
    - **plate** (string): Vehicle plate number.
    - **capacity** (number): Vehicle passenger capacity.
    - **vehicleType** (string): Type of vehicle.
  - **token** (string): JWT Token.
