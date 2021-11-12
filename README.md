### api-node-boilerplate-ts
> Modelo com configurações iniciais de uma API para facilitar o desenvolvimento de novos projetos.
 
- Dependências:
  - Prettier
  - Eslint
  - node
  - express
  - typescript
  - cors
  - ts-node-dev
  - tsconfig-paths
  - express-async-errors

* Estrutura de pastas:

    * config - configurações de bibliotecas externas, como por exemplo, autenticação, upload, email, etc.
    * modules - abrangem as áreas de conhecimento da aplicação, diretamente relacionados com as regras de negócios. A princípio criaremos os seguintes módulos na aplicação: customers, products, orders e users.
    * shared - módulos de uso geral compartilhados com mais de um módulo da aplicação, como por exemplo, o arquivo server.ts, o arquivo principal de rotas, conexão com banco de dados, etc.
    * services - estarão dentro de cada módulo da aplicação e serão responsáveis por todas as regras que a aplicação precisa atender, como por exemplo:
