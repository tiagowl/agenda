# ADRs - Architectural Decision Records

## ADR-001 - Arquitetura SPA sem backend no MVP
- **Status:** Aceito
- **Contexto:** Requisito de uso pessoal, baixo custo operacional e entrega rapida.
- **Decisao:** Implementar aplicacao SPA com Vue + Pinia + persistencia local.
- **Consequencias:**
  - Pro: simplicidade, custo zero de infraestrutura, entrega acelerada.
  - Contra: sem sincronizacao entre dispositivos; dependencia de armazenamento local.

## ADR-002 - Persistencia em localStorage
- **Status:** Aceito
- **Contexto:** Requisito explicito do produto para persistencia local.
- **Decisao:** Usar `localStorage` com adaptador de persistencia e versionamento de schema.
- **Consequencias:**
  - Pro: implementacao simples e offline-friendly.
  - Contra: risco de perda por limpeza do browser; limite de armazenamento.

## ADR-003 - Gerenciamento de estado com Pinia
- **Status:** Aceito
- **Contexto:** App com multiplos modulos (agenda, dashboard, import/export).
- **Decisao:** Centralizar estado de dominio em stores Pinia com `actions/getters`.
- **Consequencias:**
  - Pro: previsibilidade e reatividade.
  - Contra: exige disciplina de separacao de responsabilidades.

## ADR-004 - Importacao/Exportacao JSON com validacao de schema
- **Status:** Aceito
- **Contexto:** Necessidade de backup/migracao sem backend.
- **Decisao:** Definir schema versionado e validar antes de substituir estado.
- **Consequencias:**
  - Pro: reduz risco de corrupcao de dados.
  - Contra: aumento de complexidade no modulo de dados.

## ADR-005 - Autenticacao simples baseada em credenciais de ambiente
- **Status:** Aceito com ressalvas
- **Contexto:** Requisito do produto para login simples.
- **Decisao:** Login local comparando credenciais com variaveis de ambiente no build.
- **Consequencias:**
  - Pro: atende requisito funcional rapidamente.
  - Contra: nao e seguranca robusta; adequado apenas para escopo pessoal.

## ADR-006 - Estrutura modular por dominio
- **Status:** Aceito
- **Contexto:** Necessidade de manutenibilidade e evolucao futura.
- **Decisao:** Organizar codigo por modulos de dominio (auth, schedule, dashboard, transfer).
- **Consequencias:**
  - Pro: reduz acoplamento e facilita testes.
  - Contra: requer convencoes claras de importacao e ownership.
