FROM  node:8

RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/

RUN npm i -g nodemon
COPY package*.json ./
RUN npm install

COPY server ./server
EXPOSE 5000
CMD [ "npm", "run", "start" ]