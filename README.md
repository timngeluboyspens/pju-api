# Smart PJU Backend

## Overview

Smart PJU Backend is a web API for the Smart PJU Monitoring system, implementing REST API principles. This backend application is built using Node.js and Express.

## How to Run Development

Follow these steps to set up and run the development environment:

1. **Install Node.js**

   - Ensure you have Node.js version 18 or higher installed on your system.

2. **Prepare PostgreSQL Database**

   - Set up a PostgreSQL database (either locally or on the cloud).

3. **Navigate to the Project Root**

   - Open your terminal and move to the root directory of the project.

4. **Configure Environment Variables**

   - Open a `.env` file in the root directory.
   - Add the following key with your database URL:
     ```env
     DATABASE_URL=postgresql://{username}:{password}@{host}:{port}/{database-name}
     ```
   - Example:
     ```env
     DATABASE_URL=postgresql://postgres:password@localhost:5432/smart-pju-db
     ```

5. **Install Dependencies**

   ```sh
   npm install
   ```

6. **Run Prisma Migrations**

   ```sh
   npx prisma migrate dev
   ```

7. **Run Database Seeder**

   ```sh
   npm run seed
   ```

8. **Start the Development Server**

   ```sh
   npm run start
   ```

   - The API will be available at `http://localhost:5000`

9. **Enable Live Auto-Reload (Optional)**
   ```sh
   npm run startdev
   ```
   - This will automatically restart the server on code changes.

## How to Build

To build the project, run the following command:

```sh
npm run build
```

This will generate a production-ready build of the application.
