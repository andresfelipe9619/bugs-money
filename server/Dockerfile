FROM node:8.11.4-alpine

WORKDIR /server
ENV NODE_ENV=production

RUN npm i -g nodemon
COPY package*.json /server/
RUN npm install

COPY . /server/

EXPOSE 5000

CMD ["npm", "start"]