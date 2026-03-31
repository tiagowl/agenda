# Documentacao Tecnica - Arquitetura do Sistema de Agendamento

## 1. Visao geral da arquitetura
Arquitetura front-end SPA mobile-first, sem backend, com persistencia local no navegador.

- **Camada de apresentacao:** Vue 3 + Tailwind CSS.
- **Camada de estado:** Pinia para gerenciamento centralizado.
- **Camada de dominio:** servicos e validadores para regras de negocio.
- **Camada de persistencia:** adaptador `localStorage`.
- **Camada de interoperabilidade:** importacao/exportacao JSON.

## 2. Componentes principais e responsabilidades
- `AuthModule`
  - Le credenciais de ambiente.
  - Gerencia estado autenticado e logout.
- `ScheduleModule`
  - CRUD de compromissos.
  - Regras de validacao (nome/data/horario obrigatorios).
- `CalendarViewModule`
  - Renderiza visoes diaria/semanal/mensal.
  - Consome seletores derivados do store.
- `DashboardModule`
  - Calcula metricas do dia vigente.
  - Exibe total marcado e nao realizado.
- `DataTransferModule`
  - Exporta estado para JSON.
  - Importa JSON com validacao de schema.

## 3. Fluxo de dados
1. Usuario interage com UI.
2. Componentes disparam `actions` no Pinia.
3. `actions` aplicam regras no dominio/validadores.
4. Estado atualizado no store.
5. Persistencia sincroniza no `localStorage`.
6. Views reativas atualizam automaticamente.

## 4. Integracoes necessarias
- **Internas:** entre modulos via Pinia + composables.
- **Externas:** nenhuma obrigatoria no MVP.
- **Navegador:** `localStorage`, upload/download de arquivo JSON.

## 5. Requisitos de qualidade
- **Performance:** carregamento inicial rapido em mobile; renderizacao eficiente das listas.
- **Escalabilidade local:** estrutura preparada para migracao futura para API sem quebrar dominio.
- **Seguranca:** autenticacao basica para ambiente pessoal; cuidado com exposicao de segredos no cliente.
- **Manutenibilidade:** separacao por modulos, tipagem consistente, funcoes pequenas e testaveis.

## 6. Estrutura sugerida de pastas
- `src/app` (bootstrap, rotas, providers)
- `src/modules/auth` (views, store, services)
- `src/modules/schedule` (views, store, services, validators)
- `src/modules/calendar` (componentes de visao)
- `src/modules/dashboard` (metricas e widgets)
- `src/modules/data-transfer` (import/export)
- `src/shared` (ui base, utilitarios, tipos, constantes)
