FROM node:18-alpine3.18 AS builder

WORKDIR /app

# Instala as dependências
COPY package.json package-lock.json ./
RUN npm ci

# Copia o código-fonte e realiza o build
COPY . .
RUN npm run build

# Estágio final (runner)
FROM node:18-alpine3.18 AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copia os arquivos gerados no estágio de build
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["npm", "start"]
