FROM node:17.8.0-alpine3.15

WORKDIR /server

COPY . .

EXPOSE 8005

RUN npm i

CMD ["npm", "run", "dev"]