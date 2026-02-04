FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./
COPY package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

ENV NODE_ENV=production
ENV PORT=3005
EXPOSE 3005

CMD ["npm", "run", "start"]