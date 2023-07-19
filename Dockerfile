FROM node:18-alpine
WORKDIR /app/nodetest
COPY . /app/nodetest/
RUN npm install

CMD node index.js