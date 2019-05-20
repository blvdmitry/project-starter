## Project starter

This is a 100% opinionated project starter for JS projects. 
Can be used for working on the whole app with frontend and backend or just for one of them.

### Getting started
   
1. Create a `.env` file in the `backend` directory. 
   Project relies on it in the code but it's ignored not to make your secret variables public.

2. Fill `.env` file with following variables and **assign your own values to them** instead of these placeholders:
   ```
   JWT_SECRET=9DEB5F0FE6560A2D5FD40B8BF2F7A088826026DAF5B3DBBB036F6CAE0B5948EC
   ```

3. Running `yarn start` in backend and frontend folders will start the project.

### Creating new react components

Running `yarn plop` in `frontend` folder will prompt for component name and create all the boilerplate for you.

### Tech stack

#### General
GraphQL + Apollo

#### Frontend
Typescript, React, PostCSS, Webpack

#### Backend
Node.js, Express

> All data is mocked with Apollo

---

### TODO

#### Frontend:
- Extract css in production build
- Add hash to production bundle
