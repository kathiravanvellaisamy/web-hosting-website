# Step 1 : Build react application

FROM node:22-alpine as build
WORKDIR /app 
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Step 2 : server with nginx
FROM nginx:1.123-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=dist /app/build .
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]
