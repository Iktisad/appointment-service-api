Here's a streamlined version expressing all dependencies in a single `npm i` command:

---

# Appointment Service API

This is a Node.js and Express API for managing appointments, with MongoDB as the database. It includes robust logging, validation, and comprehensive API documentation.

## Installation

Install all dependencies in one command:

```bash
npm install
```

- **express**: For building the API server.
- **nodemon**: For live-reloading during development.
- **dotenv**: For environment variable management.
- **mongoose**: For MongoDB connectivity and CRUD operations.
- **moment**: For date and time manipulation.
- **express-validator**: For request validation.
- **swagger-jsdoc** & **swagger-ui-express**: For API documentation.
- **winston** & **winston-mongodb**: For logging, with MongoDB integration.

## Setting Up the Environment

1. Rename `.example.env` to `.env`.
2. Set the following parameters in the `.env` file:

   - `PORT`: Your application server port.
   - `DBPORT`: Your MongoDB port.
   - `DATABASE`: Your database name.
   - `NODE_ENV`: Set to `development` for debugging or `production` for deployment.

---

This approach simplifies the setup with a single command to install all dependencies.
