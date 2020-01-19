# Crud-Produtos

## Descrição do Projeto
### Back-end
API REST para CRUD de projetos, feito em Java. Foram usadas as seguintes tecnologias:

Maven
Spring Boot
Spring Data REST
H2 (Banco em Memória)
Hibernate

Front-end
Aplicação cliente para consumir o CRUD de produtos. Foram usadas as seguintes tecnologias:

ReactJs
Bootstrap 4
## Configuração e Execução

### Docker
Foi disponibilizado um arquivo docker-compose.yml contendo os conteiners necessários à execução, já configurados. Para executar a aplicação usando docker, basta executar o compose.

docker-compose up

O front-end será executado na porta 4200 (http://localhost:3000) e o back-end será executado na porta 8080 (http://localhost:8080).

### Execução Local
Front-end
Na pasta front, digite:

npm install

npm start

O front-end será executado em http://localhost:3000.

#### Back-end
Na pasta back, digite:

mvn spring-boot:run

O back-end será executado em http://localhost:8080.
