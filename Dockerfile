FROM node:16-alpine

ENV PORT 1337
ENV HOST 0.0.0.0
ENV NODE_VERSION=16.15.1
# ENV NODE_ENV production

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package*.json /app
COPY yarn.lock /app
RUN yarn install

# Bundle app source
COPY . /app

RUN yarn build
EXPOSE 1337

CMD [ "yarn", "start" ]