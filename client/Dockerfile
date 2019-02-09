FROM node:8

RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app/client

ADD package*.json ./
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install
ADD . /usr/src/app/client

EXPOSE 3000
EXPOSE 35729

ENTRYPOINT ["/bin/bash", "/client/run.sh"]
CMD [ "npm", "run", "start" ]
