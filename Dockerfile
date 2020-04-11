### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/aston-villa-app /usr/share/nginx/html
