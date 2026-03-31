# Prototipos Interativos - Especificacao

## Objetivo
Definir comportamento interativo das principais telas para orientar implementacao em Vue + Pinia + Tailwind.

## Fluxo 1 - Login -> Agenda
1. Usuario abre app e visualiza login.
2. Preenche credenciais e toca em "Entrar".
3. Sistema valida:
   - Sucesso: redireciona para agenda (visao diaria).
   - Erro: exibe mensagem inline e mantem foco no formulario.

### Estados de interface
- Default
- Loading
- Erro de autenticacao
- Campos invalidos

## Fluxo 2 - Criar compromisso
1. Usuario toca em "Novo compromisso".
2. Modal/tela de formulario abre.
3. Usuario preenche campos e salva.
4. Sistema persiste no `localStorage` e atualiza lista.

### Feedback visual
- Toast de sucesso ao salvar.
- Erro inline em campos obrigatorios.
- Botao "Salvar" desabilitado quando invalido.

## Fluxo 3 - Editar/Excluir compromisso
1. Usuario abre detalhe de compromisso.
2. Edita campos e salva, ou escolhe excluir.
3. Exclusao exige confirmacao explicita.
4. Lista e dashboard atualizam em tempo real.

### Estados
- Modo visualizacao
- Modo edicao
- Confirmacao destrutiva

## Fluxo 4 - Alternar visoes do calendario
1. Usuario toca em Dia/Semana/Mes.
2. Componente troca recorte temporal mantendo contexto de data.
3. Sistema preserva consistencia dos dados em todas as visoes.

### Microinteracoes
- Transicao curta (150-250ms).
- Destaque visual da aba ativa.

## Fluxo 5 - Importar/Exportar JSON
1. Usuario exporta e baixa arquivo JSON.
2. Usuario seleciona arquivo para importar.
3. Sistema valida schema:
   - Valido: confirma e aplica.
   - Invalido: rejeita e mostra motivo.

### Estados e seguranca de UX
- Preview de quantidade de registros detectados.
- Confirmacao antes de sobrescrever dados existentes.
- Mensagens sem jargao tecnico.
