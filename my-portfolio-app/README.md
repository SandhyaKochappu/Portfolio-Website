# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
npm create-react-app my-portfolio-app
cd my-portfolio-app
npm start

### The purpose of the application

To create a personalised and dynamic portfolio website. This website showcases my resume, skills, projects, and experiences.

## Dependecies and installation

The following dependencies were used to build this project using npm install command.

"@formspree/react": "^2.5.1",
"@react-pdf-viewer/core": "^3.12.0",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"ag-grid-community": "^31.2.1",
"ag-grid-react": "^31.2.1",
"axios": "^1.6.8",
"bootstrap": "^5.3.3",
"date-fns": "^3.6.0",
"dotenv": "^16.4.5",
"pdfjs-dist": "^3.4.120",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-icons": "^5.1.0",
"react-pdf": "^8.0.0",
"react-router-dom": "^6.22.3",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"

### A list of features and workflow

This website has a header, footer, navigation bar, hero image.
Third-party React component, React Router was used for client side routing. These are the page titles.
Home page has hero image, headings and button.
When you click on About page, URL changes to About.
About page has description about me and Contact button.
When you click on Contact page, URL changes accordingly.
Contact Page, uses an External API Formspree to build free custom forms and receive emails from visitors.
Portfolio page- fetched from GITHUB API, When clicked clicked on the link, is redirected to the GITHUB repository pAGE.
React functional components, props and hooks (e.g., useState, useEffect) were used to fetch data from external APIs such as GIT HUB and. Asynchronous programming was implemented to retrieve data from GITHUB API.

### Application architecture

We have three folders named routes for navigating to different pages This folder contains all the main pages of the app.,
components for handling component javascript pages and stylesheets.
An assets folder to store images and other local files if any.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### handling secrets

.gitignore file is created to handle secrets
.env file is used to store API keys.

### Licensing.

MIT open license was used for code licensing purposes.
Free redistribution of software: Anyone can sell giving away the software
Source code can be made available through compiled forms, in programmer-readable formats
People can modify and distributed the software under the same terms and conditions.

### Workflow

react app was created using 'npm create-react-app'
Additional pages were created using react routes.
React components were used for navigation into different pages and style setting.
react-router-dom, bootstrap,ag-grid-react,ag-grid-community,axios and react-icons were installed using 'npm install commands' in the command prompt.
Button font families were imported from 'Google fonts'.

The webpage was made mobile compatible using @media screen and (max-width: 1040px) command and a hamburger menu was applied, which is not available on a web screen.

Button clicks were handled using 'useState'.

### Trouble shooting

You contact me through the contact page in the application with your email. Once I receive the e-mail, I will get back to you.

### component specific installations

To install and use tailwind components follow the below steps:
Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

1. npm install -D tailwindcss
2. npx tailwindcss init
3. Configure your template paths
   Add the paths to all of your template files in your tailwind.config.js file.
4. Add the Tailwind directives to your index.CSS file.
5. Start using Tailwind’s utility classes to style your content.

npm install date-fns --save
npm install dotenv --save

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
