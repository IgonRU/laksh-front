FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build:prod

FROM node:20
WORKDIR /app
COPY --from=build /app/dist/laksh-front/ ./dist/laksh-front/
COPY --from=build /app/package*.json ./
RUN npm ci --only=production

EXPOSE 4000
CMD ["node", "dist/laksh-front/server/server.mjs"]
