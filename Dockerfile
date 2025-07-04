FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy bot files
COPY bot/ ./bot/
COPY .env ./

# Expose port (optional, for health checks)
EXPOSE 8080

# Set environment
ENV NODE_ENV=production

# Start the bot
CMD ["node", "bot/index.js"]