# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm install -g serve
# add app
COPY . ./
# start app serve -s build

CMD ["app", "server","-s","build"]
