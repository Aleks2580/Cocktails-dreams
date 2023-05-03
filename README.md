# Cocktails & Dreams

Cocktails & Dreams is a sophisticated and user-friendly cocktail recipe finder app, designed with the latest web development technologies. It utilizes React SSR, JS (ES6), HTML5, CSS, Bootstrap 5, AJAX, API, Sequelize, PostgreSQL, Express-sessions, ExpressJS, and responsive design to deliver a seamless and engaging user experience.

## Features
- User registration and login system
- Popular page showcasing the most popular cocktails of the year
- Search functionality allowing users to search for cocktails by name, keyword, or letter
- Ability to save favorite drinks into user accounts
- Upload functionality for users to submit their own cocktail recipes

## Getting Started
To get started with Cocktails & Dreams, simply register as a new user or log in if you already have an account. Once you're logged in, you can browse the popular page to see the most popular cocktails of the year. From there, you can use the search functionality to find cocktails by name, keyword, or letter.

#### To set up the project locally, follow these steps:

1. Clone the repository from Github by running the following command: git clone https://github.com/Aleks2580/Cocktails-dreams.git
2. Navigate to the project directory by running: cd cocktails-dreams
3. Install the dependencies by running: npm install
4. Create a .env file in the project root directory with the following contents:

- DATABASE_URL=postgres://userName:password@localhost:5432/database_name

- SESSION_SECRET=<your_session_secret_key>

Replace username, password, and database_name with your PostgreSQL credentials and database name. Choose a random string for <your_session_secret_key>.

5.Set up the PostgreSQL database by running the following commands:

 - npx sequelize db:create

- npx sequelize db:migrate


This will create the database, apply the migrations, and seed the database with initial data.

6. Finally, start the application by running: npm run start

The application will be available at http://localhost:3000/.

That's it! You should now be able to run the application locally.

### Screenshots
#### Sign up Page
![signup](https://user-images.githubusercontent.com/90598699/235955093-5e9bd718-ee8e-4cda-9ede-08df3623ac10.png)

#### Login Page
![login](https://user-images.githubusercontent.com/90598699/235955129-983187d9-96c4-4c47-b577-ed188f983757.png)

#### Home Page
![Screenshot 2022-11-17 at 5 03 52 pm](https://user-images.githubusercontent.com/90598699/202408314-80968c92-25d5-48b2-b123-627627f5f5b9.png)

#### Popular Page
The page shows the most popular cocktails of the year
![Screenshot 2022-11-17 at 5 04 26 pm](https://user-images.githubusercontent.com/90598699/202409372-93a4170b-fabb-4ab4-b279-c0562ca2df78.png)


#### Account Menu
![Screenshot 2022-11-17 at 5 05 02 pm](https://user-images.githubusercontent.com/90598699/202409686-22d498d3-aade-4c04-80fd-06b641395a47.png)

Search functionality allowing users to search for cocktails by name, keyword, or letter
![Screenshot 2022-11-17 at 5 05 41 pm](https://user-images.githubusercontent.com/90598699/202409860-dc214d33-2ddf-45d3-9143-093e6d39a81b.png)
![Screenshot 2022-11-17 at 5 05 53 pm](https://user-images.githubusercontent.com/90598699/202409886-9a078c4a-d803-45af-826e-9cb162d90487.png)

Simply type in what you want to find, and the app will display the relevant results.
![Screenshot 2022-11-17 at 5 06 40 pm](https://user-images.githubusercontent.com/90598699/202410134-e9920401-0eaf-4b6c-959f-d9c612622132.png)

#### Saved Cocktails Page
You can save your favorite drinks into your account
![Screenshot 2022-11-17 at 5 07 44 pm](https://user-images.githubusercontent.com/90598699/202410371-9bd8affe-55bd-4e13-a90e-e085133d6f96.png)

#### Upload Your Cocktail Page
Also, you can upload your own recipes on this page (Account -> Upload your cocktail) 
![Screenshot 2022-11-17 at 5 08 01 pm](https://user-images.githubusercontent.com/90598699/202410587-dd187fa4-d3db-4586-8748-b27c94e257dc.png)


I hope you enjoy using Cocktails & Dreams to discover new cocktail recipes and save your favorites. Cheers!
