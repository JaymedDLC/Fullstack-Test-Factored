# Fullstack-Test-Factored

## Project Overview

This repository contains the Fullstack Test for Factored. It is designed to showcase skills in building a fullstack application, including backend, frontend, and integration.

## Features

- Backend API built with modern frameworks.
- Frontend application with responsive design.
- Integration between backend and frontend.
- Unit and integration tests.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/Fullstack-Test-Factored.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Fullstack-Test-Factored
    ```
3. Build and run the Docker containers:
    ```bash
    docker-compose up --build
    ```

## Usage

1. Ensure the Docker containers are running:
    ```bash
    docker-compose up
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Testing

Run the tests inside the respective Docker containers:

- Backend:
  ```bash
  docker-compose exec backend npm test
  ```
- Frontend:
  ```bash
  docker-compose exec frontend npm test
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Commit your changes:
    ```bash
    git commit -m "Add feature-name"
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## Licensek

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
