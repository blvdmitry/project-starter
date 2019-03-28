## Project starter

This is a 100% opinionated project starter for JS projects. 
Can be used for working on the whole app with frontend and backend or just for one of them.

### Getting started

> This project uses Docker, so you will have to install it and docker-compose in order to use it.

In order to start using the starter you will need to clone the repo and run `yarn init` in the root folder.
This will build your Docker containers and run the database migrations.

Running `yarn start` after will run frontend and backend on localhost.

### Creating new react components

Running `yarn plop` in `frontend` folder will prompt for component name and create all the boilerplate for you.

### Building and running prod

There are production scripts available:

`yarn build:prod` - builds docker containers in production environment
`yarn start:propd` - runs built production docker containers

### Tech stack

#### General
Docker, Docker-compose, Webpack, Typescript, GraphQL + Apollo

#### Frontend
React, PostCSS, Nginx

#### Backend
Express, PostreSQL, Sequelize

---

### TODO

#### Frontend:
- Fix apollo cache for tasks
- Apollo error handling
- Change apollo client url for production (or maybe development too)
- Extract css in production build

#### Backend:
- ENV: allowedOrigins, replace env.js with proper env
- Watcher for development docker-compose up
