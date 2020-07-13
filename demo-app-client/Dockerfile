FROM node:12.4.0-alpine as build

WORKDIR /demo-app-client

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

ARG DEMO_APP_SERVER_URL
ENV DEMO_APP_SERVER_URL=${DEMO_APP_SERVER_URL}

RUN npm run build
#########################################################################################################
FROM nginx:1.17.0-alpine

COPY --from=build /demo-app-client/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]