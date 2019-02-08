FROM node:8

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
EXPOSE 35729
CMD [ "npm", "run", "start" ]
