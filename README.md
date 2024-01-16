# Task Management Web Application

This web application provides a user-friendly platform for task management, enabling users to register, log in, and manage their tasks securely. Built using the MVC architecture, the application incorporates authentication, task creation, updating, and deletion functionalities.

![homepage](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/3277ca4e-7963-4c63-a731-edfad5a76164)

## Video:

[Screen Recording - Made with FlexClip (1).webm](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/359885b4-307c-4190-acec-612a0f8e6dd3)

## Technologies Used
- **Node.js:** Used as the backend runtime environment.
- **Express.js:** Framework for building the web application.
- **MongoDB:** Database for storing user and task information.
- **Bcrypt:** Utilized for secure password hashing.
- **Express Sessions:** Managed user sessions for a secure and seamless experience.
- **Bootstrap:** Employed for front-end design and responsiveness.

## Project Structure
The project follows the **MVC (Model-View-Controller) architecture**:

- **Models:** Define the structure and methods for interacting with the database.
- **Views:** Handle the presentation and user interface using EJS templates.
- **Controllers:** Manage the logic and communication between models and views.
- **Routes:** Define the application's endpoints and connect them to controllers.

![mvc](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/6a20f67d-ded6-4391-9321-f34698725d74)

## Authentication
Implemented user authentication ensures secure user registration, login, and logout processes. Passwords are hashed using bcrypt for enhanced security. The system verifies email existence during registration and uses bcrypt to compare passwords during login.

## Task Management
Users can create, update, and delete tasks through an intuitive interface. The application enforces data validation, preventing the addition of tasks with missing information. Users can also view and edit their task lists seamlessly.

![edittask](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/5a6f626c-6581-4e27-b70e-db7eef1fd080)

## Form Validation
To enhance user experience and data integrity, the application implements form validation. Users are required to fill in all necessary information, and the system prevents the addition of tasks with missing details.

![addtask](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/e5f65d4b-e733-405d-8464-19b98d117a6b)

## Email Validation
During user registration, a valid email address is required. This ensures that users provide a legitimate email for account creation.

![email](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/fea4febd-321e-4580-b87d-395440ba121b)

## Getting Started
Follow these steps to run the project locally:

- Clone the repository: git clone https://github.com/AsmaKacem1/TaskManagementAPINodeJS.git
- Install dependencies: npm install
- Set up MongoDB and update the connection URL in the project files.

![run](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/c739cef7-76cb-4ac8-838d-7de416837747)

- Run the application: nodemon

![nodemon](https://github.com/AsmaKacem1/TaskManagementAPINodeJS/assets/73066984/7fb5bb97-2e25-4608-8e06-50a21b662733)

- Access the web application at http://localhost:3000/tasks

## Authentication and Authorization
The implemented authentication system for the Task Management solution allows users to securely register, log in, and log out. The registration process checks for existing emails and employs bcrypt for password hashing. User logins involve email and password verification using bcrypt, with session token creation and storage for secure sessions. Logging out clears the user session, and Express sessions manage user sessions securely. An optional Express middleware, guardAuth, validates session tokens for authentication checks. The user interface is seamlessly integrated with authentication methods, ensuring a smooth user experience with redirection based on authentication status.

## Feedback
Feedback on the project is highly appreciated. Feel free to open issues or contribute to further enhance the functionality and user experience.

## Estimated Time Spent
2 days

