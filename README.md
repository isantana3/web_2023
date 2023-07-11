# Sobre SGL UESC Backend

## Sistema de Gerenciamento de Laboratórios

O sistema de gerenciamento de laboratórios é um sistema desenvolvido inicialmente para o Colegiado de Ciência da Computação (COLCIC) da Universdidade Estadual de Santa Cruz (UESC), com o objetivo de auxiliar na dinâmica organizacional das salas e laboratórios da universidade.
Dado o problema já conhecido de existirem muitas salas/laboratórios, com diferentes infraestruturas e recursos em pavilhões diferentes. Elaborar um cronograma de horários para reservas de salas/laboratórios durante o semestre, é um desafio muito grande e trabalhoso para ser resolvido através de planilhas do excel. Por isso surgiu a ideia de um sistema facilitador para que essa gerencia se torne menos trabalhosa.
O SGL conta com módulos de cadastro para diferentes tipos de usuários, cadastro, edição e exclusão de itens de infraestrutura, salas/laboratórios, pavilhões, usuários e de reservas de salas.
O SGL também conta com uma interface de usuário amigável que se encontra em outro repositório. Abaixo listaremos os requisítos do sistema que já foram concluídos até o presente momento (11/07/23)

## O que Concluímos
### CRUDs
  - Users
  - Salas/Labs
  - Pavilhões
  - Itens de infra
  - Reservas

### Regras de negócio
  - As reservas precisam ser aprovadas por um admin
  - Só deve ser possível reservar uma sala vaga (não reservada)
  - Na listagem de reservas, deve ser possível filtrar pos sala, pavilhão, reservante, dia e hora
  - Reserva simples (dia único)
  - Reserva semestral (precisa ser melhor testada)
  - Validação de email @uesc

### Casos de uso
  - Login
  - Esqueci minha senha
  - Cadastro
  - Admin listar pedidos e aprovar reservas
  - listagem de salas, pavilhões e itens (Paginado)
  - listagem de reservas com filtros (paginado)
  - Edição de perfil de Usuário

### Extras
  - Documentação swagger
  - Testes unitários

## O que faltou ser feito
  - Testes mais aprofundados na funcionalidade de reserva semestral
  - Integração entre reserva semestral e front-end
  - Adicionar filtro por usuário na rota de agendamento

## Ideias e melhorias
  - Melhorar a qualidade do código em si, não que foi feito com gambiarras, mas o curto prazo nos impossibilitou de aplicar as melhores práticas de progração em alguns casos.
  - Melhoria na cobertura dos testes unitários
  - Acrescentar filtros na parte de gestão
  - Melhorar o feedback dos erros das requests

# Deploy

 - URL : https://master.d2rj730dup0i6g.amplifyapp.com/
 - Usuário de teste : serra.henrique3@uesc.br
 - senha: 12345678
