# Imagem base
FROM node:18

# Criar pasta da aplicação
WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar restante do código
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Expor porta
EXPOSE 3000

# Rodar aplicação
CMD ["npm", "run", "dev"]