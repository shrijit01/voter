Polling System API
This is a Node.js-based API for creating and managing polls. It allows you to create questions, add options to questions, add votes to options, and more.

Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js and npm installed on your local machine.
MongoDB installed and running locally or a remote MongoDB connection URI.
Git for cloning the project repository (optional but recommended).
Getting Started
To get this project up and running on your local machine, follow these steps:

Clone the Repository (If you haven't already):

git clone https://github.com/your-username/polling-system-api.git


Navigate to the Project Directory:
cd polling-system-api


Install Dependencies:
npm install


Set Environment Variables:
Create a .env file in the project root directory and add the following variables:
PORT=8000
MONGODB_URI=your-mongodb-uri


Replace your-mongodb-uri with the MongoDB connection URI.
Start the Server:
npm start


The server should now be running at http://localhost:8000.


API Endpoints
Here are the available API endpoints:

Create a Question:

POST /questions/create
Add Options to a Question:

POST /questions/:id/options/create
Add a Vote to an Option:

POST /options/:id/add_vote
Delete a Question (Optional - With Constraints):

DELETE /questions/:id
Delete an Option (Optional - With Constraints):

DELETE /options/:id
View a Question with Options and Votes:

GET /questions/:id
Usage
You can use a tool like Postman to interact with the API endpoints. Refer to the API documentation above for details on how to use each endpoint.




Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test them thoroughly.
Commit your changes with clear and concise commit messages.
Push your changes to your fork.
Create a pull request to the main repository.




License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Thanks to Kritica for inspiration and guidance.
Contact
If you have any questions or need further assistance, please feel free to contact at shrijit01@gmail.com