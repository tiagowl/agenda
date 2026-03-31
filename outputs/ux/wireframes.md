# Wireframes - Sistema de Agendamento Web (Mobile First)

## Mapa de navegacao
- Login
- Agenda (tab principal)
  - Visao diaria
  - Visao semanal
  - Visao mensal
- Dashboard
- Importar/Exportar
- Configuracoes/Logout

## Wireframe 1 - Tela de Login
### Estrutura
- Header simples com nome do app.
- Campo usuario.
- Campo senha.
- Botao primario "Entrar".
- Mensagem de erro abaixo do botao quando credenciais invalidas.

### Interacoes
- Enter envia formulario.
- Estado loading no botao durante autenticacao.
- Feedback de validacao para campos vazios.

## Wireframe 2 - Agenda (lista do dia + calendario)
### Hierarquia de informacao
1. Data atual e alternancia dia/semana/mes.
2. Lista de compromissos ordenada por horario.
3. FAB/botao fixo "Novo compromisso".

### Interacoes
- Tap em compromisso abre detalhe/edicao.
- Swipe opcional para excluir (com confirmacao).
- Troca de visao por tabs segmentadas.

## Wireframe 3 - Formulario de compromisso
### Campos
- Nome (obrigatorio)
- Data (obrigatorio)
- Horario (obrigatorio)
- Observacoes (rich text simplificado)

### Acoes
- Botao primario "Salvar".
- Botao secundario "Cancelar".
- Acao destrutiva "Excluir" apenas em modo edicao.

## Wireframe 4 - Dashboard diario
### Blocos
- Card: "Compromissos de hoje".
- Card: "Total marcados".
- Card: "Nao realizados".
- Lista curta com proximos compromissos do dia.

### Interacoes
- Tap em card filtra a lista da agenda.
- Indicadores com estados vazios quando nao houver dados.

## Wireframe 5 - Importar/Exportar
### Estrutura
- Secao "Exportar dados" com botao unico.
- Secao "Importar dados" com seletor de arquivo.
- Area de feedback (sucesso/erro/preview basico).

### Interacoes
- Confirmacao antes de sobrescrever dados.
- Tratamento de JSON invalido com mensagem clara.

## Responsividade
- Base mobile first (320px+).
- Em telas maiores, cards do dashboard em grid 2x2.
- Lista e calendario em layout combinado no desktop.
