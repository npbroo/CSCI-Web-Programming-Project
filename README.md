How to run:

This project is built using NEXT.js which is built on the React javascript framework. The github Repository is public and located at this link: https://github.com/npbroo/CSCI-Web-Programming-Project

In order to run the website locally, you must install node.js and the npm package manager. 

We have included a setup video outlining the setup process for reference:
https://youtu.be/L_xya1kH2_k

1.) install node.js
    - https://nodejs.org/en/download/
    - this will install the npm package manager

2.) install all of the dependencies
    - navigate to the base site directory within your console/command prompt
    - in the console run:
        $npm install 

3.) load the included .sql file into XAMPP
    - name the database "final_project"
    - import the included .sql file to create intitial mySQL database

4.) run the website
    - navigate to the base site directory within your console/command prompt
    - in the console run:
    $npm run dev

5.) enjoy


Notes: 
We included functionality to persist login across multiple pages using cookies. 
We also included the ability to register a new account, as well as login and update the password.
All data user data is stored in the database, and is sent securely from the forms to the api using post requests.

Group Members:
Nathan Brooks 
Paxton Chai
Yamin Himani
Rian Johnson
Nicholas Han
