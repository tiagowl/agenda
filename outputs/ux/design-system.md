# Design System Basico - Agenda Web Mobile

## Principios de design
- Clareza antes de densidade.
- Acoes primarias sempre evidentes.
- Consistencia visual entre telas.
- Feedback imediato para toda acao do usuario.
- Acessibilidade como requisito base.

## Tokens visuais (proposta)
### Cores
- Primaria: azul medio para acoes principais.
- Sucesso: verde para confirmacoes.
- Alerta: amarelo para avisos.
- Erro: vermelho para bloqueios/falhas.
- Neutras: escala cinza para textos e bordas.

### Tipografia
- Fonte sans-serif legivel em mobile.
- Escala: 12, 14, 16, 20, 24.
- Peso: regular (conteudo), semibold (titulos), bold (metricas).

### Espacamento
- Grid base de 4px.
- Espacos recomendados: 8, 12, 16, 24.

### Radius e elevacao
- Radius: 8px em inputs/cards; 12px em modais.
- Sombra leve para cards e overlays discretos.

## Componentes base
- Botao (primario, secundario, destrutivo, desabilitado).
- Input (texto, data, horario) com helper/error.
- Textarea rich text simplificada.
- Card de metrica (dashboard).
- Tabs segmentadas (dia/semana/mes).
- Toast de feedback (sucesso/erro).
- Modal de confirmacao.
- Empty state com CTA.

## Estados de componente
- Default
- Hover/focus (quando aplicavel)
- Active
- Disabled
- Error
- Loading

## Regras de acessibilidade
- Contraste minimo WCAG AA.
- Alvo de toque minimo 44x44px.
- Labels sempre visiveis para campos.
- Nao depender apenas de cor para status.
- Navegacao por teclado em elementos interativos essenciais.

## Padroes de conteudo (microcopy)
- Mensagens curtas e diretas.
- Erros explicam causa e proximo passo.
- Confirmacoes destrutivas nomeiam impacto da acao.
- Titulos orientados a tarefa (ex.: "Novo compromisso").
