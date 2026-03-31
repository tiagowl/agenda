# Relatorio de Usabilidade

## Objetivo do teste
Avaliar eficiencia, clareza e confiabilidade dos fluxos principais: login, CRUD, navegacao do calendario, dashboard e importacao/exportacao.

## Cenarios de uso
1. Realizar login com sucesso e com erro.
2. Criar, editar e excluir compromisso.
3. Alternar entre dia/semana/mes e localizar um compromisso.
4. Consultar dashboard e interpretar metricas.
5. Exportar dados e importar JSON valido/invalido.

## Metricas de usabilidade
- Taxa de sucesso por tarefa (%).
- Tempo medio por tarefa (segundos).
- Erros por tarefa (quantidade).
- Numero de toques/cliques por fluxo.
- SUS simplificado (0-100) para satisfacao percebida.

## Feedback qualitativo esperado
- "Consegui cadastrar compromisso rapido?"
- "Entendi facilmente o que esta pendente hoje?"
- "As mensagens de erro foram claras?"
- "Senti seguranca ao importar dados?"

## Problemas potenciais identificados
- Ambiguidade entre compromissos "nao realizados" e futuros.
- Excesso de informacao no calendario mensal em telas pequenas.
- Risco de acao destrutiva sem contexto suficiente.
- Falta de indicacoes de progresso em importacao maior.

## Recomendacoes de refinamento
- Definir regra visual clara para status (realizado, pendente, atrasado).
- Adotar progressive disclosure no mes (mostrar resumo + detalhe sob demanda).
- Reforcar confirmacao em excluir/importar com texto objetivo.
- Incluir estado de carregamento com feedback percentual na importacao.

## Criterios de aceitacao de UX
- Taxa de sucesso >= 90% nas tarefas principais.
- Tempo de cadastro de compromisso <= 45 segundos.
- SUS simplificado >= 80.
- Nenhum erro critico sem feedback compreensivel.
