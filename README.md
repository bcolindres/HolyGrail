# Full Stack Holy Grail Application

This repository contains the code for a full-stack web application that implements the Holy Grail layout using Express.js for the backend, Redis for the database, and a frontend interface.

## Setup Instructions

### Prerequisites
- Node.js installed on your machine
- Docker installed on your machine

### Installation Steps
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal or command prompt.
3. Install dependencies by running the following command: npm install

4. Set up the Redis Docker container locally by running the following command: docker run --name my-redis-container -d -p 6379:6379 redis



### Running the Application
1. Once the dependencies are installed and the Redis Docker container is running, start the Express server by running: node index.js


2. Open your web browser and navigate to `http://localhost:3000` to access the Holy Grail application.

## Assignment Tasks

The assignment tasks include:
- Setting up a Redis database using Docker.
- Updating Express endpoints to connect to the Redis database.
- Initializing values for the Holy Grail layout in the Redis database.
- Implementing endpoint to update key-value pairs in the Redis database.
- Implementing a method to retrieve data from the Redis database.
- Providing screenshots showing the running Redis Docker container and the Holy Grail application frontend.


## License

This project is licensed under the [MIT License](LICENSE).

