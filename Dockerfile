# Use Node.js version 18.20.1 as base image
FROM node:18.20.1

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which Next.js application will run (default is 3000)
EXPOSE 3000

# Command to run the Next.js application
CMD ["npm", "start"]