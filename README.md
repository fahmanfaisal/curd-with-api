# CRUD API with Node.js, Express.js, MongoDB

A simple RESTful API project for user management (CRUD operations) built using Node.js, Express.js, MongoDB, and Postman.

## Project Features

- Node.js as server runtime
- Express.js web framework
- MongoDB as the database
- Mongoose ORM for MongoDB
- API testing using Postman

## Table of Contents

- Installation
- Configuration
- Folder Structure
- API Endpoints
- Postman Testing
- Screenshots
- License

## Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd crud
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Configuration

1. Setup environment variables:  
   Create a `.env` file in the root directory and add your MongoDB URI and PORT:
   ```
   MONGODB_URI=mongodb://localhost:27017/crud
   PORT=8000
   ```
2. Start the server:
   ```
   npm start
   ```
   The server will run on http://localhost:8000 and connect to your MongoDB database.

## Folder Structure

```
crud/
│
├── model/
│   └── userModel.js
├── controller/
│   └── userController.js
├── routes/
│   └── userRoute.js
├── index.js
├── .env
├── package.json
```

- `model/userModel.js` – Defines User schema.
- `controller/userController.js` – Contains CRUD logic.
- `routes/userRoute.js` – API routes for users.
- `index.js` – Main server file.

## API Endpoints

| Method   | Endpoint                                  | Description        |
|----------|-------------------------------------------|--------------------|
| POST     | `/api/user/create`                        | Create user        |
| GET      | `/api/user/getallusers`                   | Get all users      |
| PUT      | `/api/user/update/:id`                    | Update user by ID  |
| DELETE   | `/api/user/delete/:id`                    | Delete user by ID  |

## Postman Testing

- Import the endpoints into Postman.
- Use the following requests and bodies:

### 1. Create User

**POST** `http://localhost:8000/api/user/create`
**Body (JSON):**
```json
{
  "name": "codezen",
  "email": "codezen@gmail.com",
  "address": "Dhaka"
}
```

### 2. Get All Users

**GET** `http://localhost:8000/api/user/getallusers`

### 3. Update User

**PUT** `http://localhost:8000/api/user/update/:id`
**Body (JSON):**
```json
{
  "name": "Jhon Doe Update",
  "email": "jhondoeupdate@gmail.com",
  "address": "China"
}
```

### 4. Delete User

**DELETE** `http://localhost:8000/api/user/delete/:id`

Returns deletion message:
```json
{ "message": "User deleted successfully" }
```

## License

This project is licensed under the ISC License.

---
