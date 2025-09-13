# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências primeiro (cache de camadas)
COPY package*.json ./
COPY bun.lockb ./
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY components.json ./

# Instalar dependências
RUN npm ci --silent

# Copiar código fonte
COPY public/ ./public/
COPY src/ ./src/
COPY index.html ./

# Build da aplicação com modo produção
RUN npm run build

# Production stage
FROM nginx:alpine

# Remover configuração padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/

# Copiar arquivos buildados para o nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Corrigir permissões
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expor porta
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
