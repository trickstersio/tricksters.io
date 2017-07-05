FROM node:alpine

ENV NODE_ENV production

RUN mkdir /app
COPY package.json /app/

WORKDIR /app

RUN npm install --quiet --production

COPY . /app/
EXPOSE 3000

CMD ["npm", "start"]
