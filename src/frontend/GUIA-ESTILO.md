# Guia de Estilo

## Convencoes de codigo
- Vue SFC com `script setup` + TypeScript.
- Componentes em `PascalCase`.
- Stores no formato `useXStore`.
- Nomes de rotas e pastas em portugues para refletir dominio do produto.

## Design system aplicado
- Tokens de cor no Tailwind (`brand`, neutros, erro/sucesso).
- Classes utilitarias compartilhadas:
  - `.card`
  - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`
  - `.input`

## Acessibilidade
- Labels explicitas para inputs.
- Estados de erro com mensagem textual.
- Acoes destrutivas separadas visualmente.
- Layout mobile-first com alvos de toque adequados.

## Responsividade
- Layout principal em coluna no mobile.
- Grid de cards no dashboard a partir de `sm`.
- Formulario com duas colunas a partir de `sm`.
