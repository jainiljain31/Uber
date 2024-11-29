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
-**token**(string):JWT Token



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
- `user`(object):
  - `fullname` (object).
     -`firstname` (string):User's first name (min 3 character long)
     -`lastname` (string):User's first name (min 3 character long)
- **email** (string): User's email address (must be a valid email).
-**token**(string):JWT Token


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


