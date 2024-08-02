Sure! Here is the updated `README.md` with the demo link included:

---

# React DIY

Welcome to the **React DIY** project! This repository contains a simple yet comprehensive example of a React application aimed at helping you understand the basics and best practices of building a modern web application using React.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**React DIY** is a hands-on project designed to guide you through the process of creating a React application from scratch. It covers the fundamental concepts of React, including components, state management, props, and hooks. By the end of this project, you should have a solid understanding of how to build and deploy a React application.

## Features

- **Component-based architecture**: Learn how to build reusable components.
- **State management**: Understand how to manage the state within your application using hooks.
- **Props**: Pass data between components effectively.
- **Routing**: Implement routing to navigate between different views.
- **Styling**: Apply CSS styling to your components.
- **Form handling**: Manage user input through forms.
- **API calls**: Fetch and display data from an external API.

## Demo

Check out the live demo of the application [here](https://kalkulacka.fedoryno.cz/).

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/dimitrijfedoryno/React-diy.git
    cd React-diy
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

This will start the development server on `http://localhost:3000`, and you should see the application running in your browser.

## Usage

### Available Scripts

In the project directory, you can run the following scripts:

- **Start the development server**:
    ```bash
    npm start
    ```

- **Build the project for production**:
    ```bash
    npm run build
    ```

- **Run tests**:
    ```bash
    npm test
    ```

- **Eject the project**:
    ```bash
    npm run eject
    ```
    > Note: This is a one-way operation. Once you `eject`, you can't go back!

## Project Structure

Here's an overview of the project structure:

```
React-diy/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **`public/`**: Contains the static assets and the HTML template.
- **`src/`**: Contains the source code of the React application.
    - **`components/`**: Contains the reusable components.
    - **`pages/`**: Contains the different views/pages of the application.
    - **`App.js`**: The root component that includes the routing setup.
    - **`index.js`**: The entry point of the application.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. **Make your changes**.
4. **Commit your changes**:
    ```bash
    git commit -m 'Add some feature'
    ```
5. **Push to the branch**:
    ```bash
    git push origin feature/your-feature-name
    ```
6. **Create a pull request**.

Please make sure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using **React DIY**! If you have any questions or suggestions, feel free to open an issue or submit a pull request.

Happy coding!