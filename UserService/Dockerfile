FROM node


# Copy app files
COPY . .

# Copy proto files to /protoFiles in the container
COPY protoFiles /protoFiles

# Install dependencies
RUN npm install

# Expose the port
EXPOSE 3001
EXPOSE 50051

# Start the app
CMD ["node", "appUser.js"]
