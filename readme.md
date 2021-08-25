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
  As a system user
  
  should be able create a new Todo [x]
  
  It is not possible to repeat a whole with the same title already registered [x]
