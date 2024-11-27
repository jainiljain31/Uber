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
