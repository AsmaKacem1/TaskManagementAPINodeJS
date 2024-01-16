# Task Management Web Application

This web application provides a user-friendly platform for task management, enabling users to register, log in, and manage their tasks securely. Built using the MVC architecture, the application incorporates authentication, task creation, updating, and deletion functionalities.

## Technologies Used
Node.js: Used as the backend runtime environment.
Express.js: Framework for building the web application.
MongoDB: Database for storing user and task information.
Bcrypt: Utilized for secure password hashing.
Express Sessions: Managed user sessions for a secure and seamless experience.
Bootstrap: Employed for front-end design and responsiveness.

## Project Structure
The project follows the MVC (Model-View-Controller) architecture:

Models: Define the structure and methods for interacting with the database.
Views: Handle the presentation and user interface using EJS templates.
Controllers: Manage the logic and communication between models and views.
Routes: Define the application's endpoints and connect them to controllers.

## Authentication
Implemented user authentication ensures secure user registration, login, and logout processes. Passwords are hashed using bcrypt for enhanced security. The system verifies email existence during registration and uses bcrypt to compare passwords during login.

## Task Management
Users can create, update, and delete tasks through an intuitive interface. The application enforces data validation, preventing the addition of tasks with missing information. Users can also view and edit their task lists seamlessly.

## Form Validation
To enhance user experience and data integrity, the application implements form validation. Users are required to fill in all necessary information, and the system prevents the addition of tasks with missing details.

## Email Validation
During user registration, a valid email address is required. This ensures that users provide a legitimate email for account creation.

## Getting Started
Follow these steps to run the project locally:

Clone the repository: git clone https://github.com/AsmaKacem1/TaskManagementAPINodeJS.git
Install dependencies: npm install
Set up MongoDB and update the connection URL in the project files.
Run the application: nodemon
Access the web application at http://localhost:3000/tasks

## Authentication and Authorization
The implemented authentication system for the Task Management solution allows users to securely register, log in, and log out. The registration process checks for existing emails and employs bcrypt for password hashing. User logins involve email and password verification using bcrypt, with session token creation and storage for secure sessions. Logging out clears the user session, and Express sessions manage user sessions securely. An optional Express middleware, guardAuth, validates session tokens for authentication checks. The user interface is seamlessly integrated with authentication methods, ensuring a smooth user experience with redirection based on authentication status.

## Feedback
Feedback on the project is highly appreciated. Feel free to open issues or contribute to further enhance the functionality and user experience.

## Estimated Time Spent
1.5 days

