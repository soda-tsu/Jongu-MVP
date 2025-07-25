# Fullstack-NextDjango

Este projeto é uma base para futuras criações.
Como o nome diz, é um projeto Fullstack com Next.js e Django.

## Como iniciar

- Crie o arquivo .env.local dentro da pasta do frontend
- Rode este comando:

```bash
# Este comando já sobe o container instalando todas as dependências
docker compose up --build
```
*depois de rodado uma vez o build, não precisa mais deste parâmetro sempre que for subir os containers de novo*

- Neste ponto frontend e backend já estão rodando, o .env do backend terá que ser criado eventualmente, mas não depende dele para rodar no início

## Como parar

- Rode este comando:

```bash
docker compose down
```
