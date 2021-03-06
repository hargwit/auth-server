FROM node:16 

WORKDIR /usr/auth-server

COPY . .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
