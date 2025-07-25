FROM node:18

# Define o argumento que será passado durante o build
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_TOKEN


# Define a variável de ambiente usando o argumento
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
ENV NEXT_PUBLIC_TOKEN=${NEXT_PUBLIC_TOKEN}

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# RUN npm run build
EXPOSE 3000

CMD ["npm", "run", "start"]
