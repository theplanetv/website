# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build
RUN npm prune --production

# Production stage
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json ./

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "build"]
