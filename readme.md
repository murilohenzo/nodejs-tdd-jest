# Utilizacao de conceitos de Repository Pattern, Service Pattern ou Service Layer e DTO Pattern
- O Repository é um conceito introduzido no Data Mapper Pattern ou Repository Pattern que consiste em uma ponte entre nossa aplicação e a fonte de dados, seja ela um banco de dados, um arquivo físico ou qualquer outro meio de persistência de dados da aplicação. Essa implementação visa isolar a forma com que nos comunicamos com os dados, abstraindo lógicas comuns de operações no banco. Geralmente o Repository possui os métodos comuns de comunicação com uma fonte de dados como listagem, busca, criação, edição, remoção, mas conforme a aplicação cresce o desenvolvedor tende a encontrar outras operações repetitíveis e, com isso, popula o repositório com mais funcionalidades.

- O Service é um conceito introduzido no Service Pattern. Ele tem como objetivo abstrair regras de negócio das rotas, além de tornar nosso código mais reutilizável. No contexto da nossa jornada, essa implementação visa reduzir a complexidade das rotas da nossa aplicação e deixá-las responsáveis apenas pelo que realmente devem fazer: receber uma requisição, repassar os dados da requisição a outro arquivo e devolver uma resposta.

- O DTO (Data Transference Object) é uma abstração de dados das entidades ou models da aplicacao, DTOs são frequentemente usados em conjunção com objetos de acesso a dados para obter dados de um banco de dados e nao possuem nenhuma regra de negocio a ser implementadad neles.

# Tests

## Unit tests
  Testa unidades da aplicação, como testar os serviços e regras de negócios da         aplicação.

## Integration tests
  Testa o fluxo completo da aplicação, de ponta a ponta.

  -> routes -> controllers -> services -> repositories /
  <- repositories <- services <- controllers <- routes

  - obs: Não testar dentro de um banco de desenvolvimento, nem produção é necessário que
    tenha um banco de testes.

# Use cases
## Use case 01 (Create new Todo)
  As a system user.
  - [x] Should be able create a new Todo. 
  - [x] It is not possible to repeat a whole with the same title already registered.
