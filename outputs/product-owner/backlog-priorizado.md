# Backlog Priorizado

## Criterios de priorizacao
- Valor de negocio para uso diario.
- Esforco de desenvolvimento na stack definida.
- Dependencias tecnicas entre funcionalidades.
- Riscos de usabilidade e consistencia de dados.

## P1 - Alta prioridade (MVP)
1. Login com credenciais em `.env` (US-01)  
   - Valor: alto | Esforco: baixo | Dependencias: nenhuma | Risco: medio (seguranca basica).
2. CRUD de compromissos com rich text (US-02, US-03, US-04)  
   - Valor: altissimo | Esforco: medio | Dependencias: estado global | Risco: medio.
3. Persistencia em `localStorage` (US-06)  
   - Valor: altissimo | Esforco: baixo | Dependencias: modelo de dados | Risco: medio (integridade local).
4. Visualizacao diaria/semanal/mensal (US-05)  
   - Valor: alto | Esforco: medio | Dependencias: CRUD pronto | Risco: medio.

## P2 - Media prioridade
5. Dashboard com metricas do dia (US-09)  
   - Valor: alto | Esforco: medio | Dependencias: dados de compromissos | Risco: baixo.
6. Exportacao de dados em JSON (US-07)  
   - Valor: medio | Esforco: baixo | Dependencias: persistencia pronta | Risco: baixo.

## P3 - Prioridade incremental
7. Importacao de dados em JSON (US-08)  
   - Valor: medio | Esforco: medio | Dependencias: validacao + modelo de dados | Risco: medio/alto (corrupcao de dados).

## Dependencias principais
- Modelo de dados de compromisso deve ser estabilizado antes de export/import.
- Views de calendario dependem de CRUD funcional e dados persistidos.
- Dashboard depende de regras de classificacao de compromisso nao realizado.

## Riscos e mitigacoes
- **Risco:** dados inconsistentes na importacao JSON.  
  **Mitigacao:** schema de validacao e importacao transacional.
- **Risco:** baixa usabilidade em mobile.  
  **Mitigacao:** criterios de aceitacao com foco em responsividade e testes em viewport pequeno.
- **Risco:** credenciais expostas de forma inadequada no cliente.  
  **Mitigacao:** escopo claro de autenticacao simples para ambiente pessoal.
