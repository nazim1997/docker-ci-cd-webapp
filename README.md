# Docker CI/CD Web Application

This project demonstrates a simple web application using Docker and Docker Compose. The application consists of a backend MySQL database and a frontend service. The frontend fetches data from the database and displays a menu of pizzas.

## Project Structure

. ├── README.md # Project documentation ├── app │   ├── db-query.js # Node.js script to query the database │   └── index.html # Frontend HTML for displaying pizza menu ├── database │   └── database.sql # SQL script to initialize the database ├── docker │   └── Dockerfile # Dockerfile for building the frontend container └── docker-compose.yml # Docker Compose configuration file

## Prerequisites

Ensure you have the following installed:
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Setup and Run

### Step 1: Start the Database Service

Run the following command to start the MySQL database container:
```bash
docker-compose -f docker-compose.yml up db -d

This initializes the database and imports the data defined in database/database.sql.

Step 2: Start the Web Frontend

