# Documentacao de Componentes

## `CommitmentFormModal`
- Responsabilidade: criar/editar/excluir compromisso.
- Entradas: `modelValue` (compromisso opcional).
- Saidas: `save`, `remove`, `close`.
- Estados: criacao, edicao, erro de validacao.

## `CommitmentList`
- Responsabilidade: listar compromissos filtrados por recorte temporal.
- Entradas: `items`.
- Saidas: `edit`.
- Estados: lista vazia, itens pendentes, itens realizados.

## `AgendaView`
- Responsabilidade: orquestrar visualizacao dia/semana/mes e CRUD.
- Dependencias: `useScheduleStore`.

## `DashboardView`
- Responsabilidade: exibir indicadores do dia vigente.
- Dependencias: `useScheduleStore`.

## `DataTransferView`
- Responsabilidade: exportar/importar dados em JSON.
- Dependencias: `parseImportJSON`, `exportJSON`, `useScheduleStore`.

## `LoginView`
- Responsabilidade: autenticar usuario com credenciais de ambiente.
- Dependencias: `useAuthStore`.
