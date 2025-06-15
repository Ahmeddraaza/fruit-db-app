# Step 1: Build the Next.js app
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve using a lightweight web server
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

# Set environment variables if needed
ENV PORT=80

EXPOSE 80

CMD ["npm", "start"]
