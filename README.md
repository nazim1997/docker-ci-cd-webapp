# Docker CI/CD Web Application

This project demonstrates a simple web application using Docker and Docker Compose. The application consists of a backend MySQL database and a frontend service. The frontend fetches data from the database and displays a menu of pizzas.

## Project Structure

```
.
├── README.md
├── app
│   ├── db-query.js
│   └── index.html
├── database
│   └── database.sql
├── docker
│   └── Dockerfile
├── docker-compose.yml
└── launch.sh
```

## Prerequisites

Ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Setup and Run

### Step 1: Start the Database Service

Run the following command to start the MySQL database container:
```bash
docker-compose -f docker-compose.yml up db -d
```

This initializes the database and imports the data defined in database/database.sql.

### Step 2: Start the Web Frontend

Once the database is ready (approximately 20 seconds), start the frontend service:

```bash
docker-compose -f docker-compose.yml up web -d
```

### Access the Application

- Visit http://localhost:3000/ to view the pizza menu.
- Visit http://localhost:3000/pizzas to fetch raw JSON data from the backend.


