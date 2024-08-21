![SHOPPING LIST](https://github.com/user-attachments/assets/1602df5f-7746-4d86-9a08-1481f89431c0)


#Shopping List Application

Overview
This Shopping List Application is a user-friendly web app that allows users to create, read, update, and delete (CRUD) items in their shopping list. Additionally, users can share items on various social media platforms, making it easier to collaborate with others.

Features:
User Authentication: Secure sign-up and login functionality.
CRUD Operations:
Create: Add new items to your shopping list.
Read: View all items in your shopping list.
Update: Edit the details of existing items.
Delete: Remove items from your shopping list.
Profile Management: Update your profile, including name, email, and password.
Item Sharing: Share items from your shopping list directly to social media platforms such as Facebook, Twitter, Instagram, WhatsApp, and LinkedIn.


Technologies Used
Frontend:

React.js: For building user interfaces.
Redux: For managing application state.
React-Redux: For connecting React components to Redux.
CSS: For styling the application.
Backend:

JSON Server: A simple REST API for managing and persisting shopping list data.
Installation
Prerequisites
Node.js and npm installed on your machine.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/shopping-list-app.git
cd shopping-list-app
Install dependencies:

bash
npm install
Start JSON Server:

bash
npx json-server --watch db.json --port 3001
Start the React application:

bash
npm start
Access the app:
Open your web browser and go to http://localhost:3000.

Usage
Register/Login:

New users can sign up using their email and a password.
Existing users can log in to access their shopping list.
Create Items:

Use the input fields to add items to your shopping list.
View Items:

All items added to the list will be displayed on the main page.
Update Items:

Click on an item to update its details.
Delete Items:

Click on the delete button to remove items from the list.
Share Items:

Share items on social media by clicking the corresponding social media icon.

Project Structure:
src/: Contains the source code.
components/: Contains React components such as SignUp, UpdateProfile, etc.
store/: Redux store configuration and actions.
styles/: CSS files for styling the application.
App.js: Main application component.
db.json: JSON Server database file for storing shopping list data.
store: Is the Redux store for the application.

Contributing
Contributions are welcome! Please fork this repository and submit a pull request if you have any improvements or features to add.

License
This project is licensed under the MIT License.

Contact
For any questions or support, please reach out to okpoco15@gmail.com 
