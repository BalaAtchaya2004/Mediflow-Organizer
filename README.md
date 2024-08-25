# Mediflow Organizer

## Overview

Mediflow Organizer simplifies health information management by securely storing and managing appointment details, allowing users to easily schedule, reschedule, and track their appointments in one place.

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Balaatchayar/Mediflow-Organizer
  
2. **Install backend dependencies and start the server:**
    ```sh
    cd server
    npm install
    npm start

3. **Install frontend dependencies and start the vite development server**
    ```sh
    cd client
    npm install
    npm start


### Server

Create a `.env` file in the `server` directory.


   ```env
    MONGO_URI = "mongodb+srv://<username>:<password>@<hostname>/<database>"
    PORT = "<port_number>"
    JWT_SECRET = "<your_jwt_secret>"
   ```

![Project Screenshot](./client/src/assets/screenshot.png)








