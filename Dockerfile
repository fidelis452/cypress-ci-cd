FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN ng build configuration=production

# Stage 2: Serve Angular application using Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]