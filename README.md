## Project starter

This is a 100% opinionated project starter for JS projects. 
Can be used for working on the whole app with frontend and backend or just for one of them.

### Getting started

> This project uses Docker, so you will have to install it and docker-compose in order to make the project running.

1. Clone the repo and run `yarn init` in the root folder.
   This will build your Docker containers and run the database migrations.
   
2. Create a `.env` file in the `backend` directory. 
   Project relies on it in the code but it's ignored not to make your secret variables public.

3. Fill `.env` file with following variables and **assign your own values to them** instead of these placeholders:
   ```
   NODE_ENV=development
   DB_HOST=db
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_NAME=postgres
   JWT_SECRET=9DEB5F0FE6560A2D5FD40B8BF2F7A088826026DAF5B3DBBB036F6CAE0B5948EC
   ```

4. Running `yarn start` after will run frontend and backend on localhost.

### Creating new react components

Running `yarn plop` in `frontend` folder will prompt for component name and create all the boilerplate for you.

### Building and running prod

There are production scripts available:

`yarn build:prod` - builds docker containers in production environment

`yarn start:prod` - runs built production docker containers

### Tech stack

#### General
Docker, Docker-compose, GraphQL + Apollo

#### Frontend
Typescript, React, PostCSS, Nginx, Webpack

#### Backend
Node.js, Express, PostreSQL, Sequelize

---

### TODO

#### Frontend:
- Extract css in production build
- Add hash to production bundle

#### Backend:
- ENV: allowedOrigins, replace env.js with proper env
- Watcher for development docker-compose up
