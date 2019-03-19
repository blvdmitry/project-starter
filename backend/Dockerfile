FROM node:8

COPY . /app/backend
WORKDIR /app/backend

RUN yarn
RUN yarn global add sequelize-cli

EXPOSE 3001
