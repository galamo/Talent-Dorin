from node:14-alpine
WORKDIR /usr/src/app

COPY index.js /usr/src/app
COPY package*.json /usr/src/app
COPY .npmrc /usr/src/app

RUN npm install
EXPOSE 3500
CMD ["node","index.js"]