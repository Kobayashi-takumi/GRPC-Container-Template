FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY dist/. .
EXPOSE 4000
CMD ["node", "index.js"]