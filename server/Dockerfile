FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Puerto por defecto
EXPOSE 5000

CMD ["node", "src/index.js"]
