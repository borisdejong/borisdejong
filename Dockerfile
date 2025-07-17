# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# (Using '*' to also copy yarn.lock, pnpm-lock.yaml etc. if they exist)
COPY package*.json ./

# Install any defined application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# *** FIX: Use npm run build ***
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]