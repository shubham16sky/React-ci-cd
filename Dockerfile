# pull the official base image
FROM node:alpine
# set working direction
#WORKDIR /app

#ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
#COPY package.json ./
#COPY package-lock.json ./
COPY . /application
WORKDIR /application
RUN npm install
RUN npm install -g serve
# add app
#COPY . ./
# start app serve -s build
RUN npm run build
EXPOSE 3000
CMD ["app", "serve","-s","build"]
