FROM node:latest
WORKDIR /app
COPY . .
COPY package.json .
CMD npm start
EXPOSE 4000