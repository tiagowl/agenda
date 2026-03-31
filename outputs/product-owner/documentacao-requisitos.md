# Documentacao de Requisitos - Sistema de Agendamento Web

## 1) Objetivos de negocio
- Organizar compromissos pessoais de forma simples e eficiente.
- Reduzir esquecimentos por meio de visualizacao clara e acompanhamento diario.
- Permitir continuidade de uso sem infraestrutura de backend (persistencia local).

## 2) Usuarios-alvo (personas)
- **Persona primaria:** usuario individual que acessa pelo celular para planejar o dia.
- **Necessidades principais:** rapidez para cadastrar compromissos, visao consolidada da agenda e acompanhamento do que ficou pendente.

## 3) Escopo funcional
- CRUD de compromissos com:
  - nome;
  - data;
  - horario;
  - observacoes em rich text.
- Visualizacao de calendario:
  - diaria;
  - semanal;
  - mensal.
- Login simples com credenciais definidas em `.env`.
- Persistencia de dados em `localStorage`.
- Importacao e exportacao de dados em JSON.
- Dashboard com:
  - compromissos do dia vigente;
  - quantidade de compromissos marcados;
  - quantidade de compromissos que nao aconteceram.

## 4) Requisitos nao funcionais
- Aplicacao web responsiva para uso principal no navegador do celular.
- Stack tecnica: Vue, Pinia e Tailwind CSS.
- Interface intuitiva e de baixa friccao para tarefas frequentes.

## 5) Restricoes e limitacoes
- Sem backend dedicado (dados locais no dispositivo).
- Autenticacao baseada em credenciais estaticas no ambiente.
- Dados podem ser perdidos em casos de limpeza de armazenamento local sem backup/exportacao.

## 6) Jornada do usuario (alto nivel)
1. Usuario faz login.
2. Usuario cadastra ou edita compromissos.
3. Usuario acompanha compromissos nas visoes diaria/semanal/mensal.
4. Usuario consulta dashboard para status do dia e pendencias.
5. Usuario exporta/importa JSON para backup/migracao quando necessario.
