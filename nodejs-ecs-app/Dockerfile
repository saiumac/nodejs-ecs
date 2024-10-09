# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Command to start the app
CMD ["node", "server.js"]
