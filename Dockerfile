# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY bun.lockb ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY components.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY public/ ./public/
COPY src/ ./src/
COPY index.html ./

# Build da aplicação
RUN npm run build

# Production stage
FROM nginx:alpine

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos buildados para o nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Corrigir permissões
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
