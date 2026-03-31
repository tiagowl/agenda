# Guias de Desenvolvimento

## 1. Estrutura e organizacao de codigo
- Organizar por dominio em `src/modules/*`.
- Evitar logica de negocio dentro de componentes visuais.
- Centralizar regras em servicos/validadores.
- Limitar acesso direto ao `localStorage` ao adaptador de persistencia.

## 2. Convencoes de nomenclatura
- Componentes Vue: `PascalCase` (`ScheduleForm.vue`).
- Stores Pinia: `useXStore` (`useScheduleStore`).
- Composables: `useX`.
- Tipos/interfaces: `PascalCase`.
- Constantes: `UPPER_SNAKE_CASE`.

## 3. Padroes de design e boas praticas
- **Separation of Concerns:** UI, dominio e persistencia separados.
- **Single Source of Truth:** estado no Pinia.
- **Adapter Pattern:** encapsular APIs do browser (`localStorage`, file IO).
- **Defensive Programming:** validar payloads antes de mutar estado.
- **Fail-safe Import:** nao sobrescrever estado em importacao invalida.

## 4. Qualidade e testes
- Testar unidade para:
  - validadores de compromisso;
  - calculo de metricas do dashboard;
  - parser/validator de importacao JSON.
- Testar integracao para:
  - fluxo CRUD completo;
  - sincronizacao com `localStorage`;
  - navegacao dia/semana/mes.
- Testar interface mobile em viewport reduzida.

## 5. Diretrizes de performance
- Evitar recomputacoes caras em listas grandes (usar `computed` e memoizacao simples).
- Carregar apenas dados necessarios por visao temporal.
- Minimizar watchers profundos no store.

## 6. Diretrizes de seguranca (escopo pessoal)
- Nao versionar arquivos `.env`.
- Sanitizar renderizacao de observacoes rich text para evitar XSS.
- Tratar importacao JSON como entrada nao confiavel.

## 7. Fluxo de contribuicao tecnica
1. Implementar por vertical de funcionalidade (UI + store + servico + teste).
2. Garantir criterios de aceitacao da US correspondente.
3. Validar comportamento em mobile.
4. Atualizar ADR/documentacao quando houver decisao arquitetural nova.
