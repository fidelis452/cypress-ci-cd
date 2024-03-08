FROM node:alpine AS builder

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular app files to the working directory
COPY . .

# Build the Angular app
RUN npm run build
