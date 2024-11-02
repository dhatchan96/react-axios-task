
# React CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built with React, Vite, Axios, and Bootstrap. It displays user data from a mock API and allows users to add, edit, and delete user records. The app uses Axios for HTTP requests and Bootstrap for a clean, responsive UI.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Display user data from a mock API
- Perform CRUD operations on user records:
  - **Create**: Add new users
  - **Read**: Display a list of existing users
  - **Update**: Edit user details
  - **Delete**: Remove users from the list
- Responsive design using Bootstrap

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/react-crud-app.git
   cd react-crud-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

- **View Users**: All existing user data is displayed on the main page.
- **Add User**: Enter a new user's details in the form fields and click **Add User**.
- **Edit User**: Click the **Edit** button next to a user record to populate the form with the user's data, modify as needed, and click **Update User**.
- **Delete User**: Click the **Delete** button next to a user record to remove it from the list.

## Project Structure

```
react-crud-app/
├── public/
│   └── index.html            # HTML template
├── src/
│   ├── components/
│   │   ├── UserList.jsx       # Component to display and manage user list
│   │   └── UserForm.jsx       # Component to add/edit user data
│   ├── App.jsx                # Main app component
│   ├── api.js                 # Axios instance for API requests
│   └── main.jsx               # App entry point
└── README.md                  # Project README file
```

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool and development server.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Bootstrap**: A CSS framework for responsive and mobile-first design.

## Contributing

If you'd like to contribute to this project, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Add some NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
