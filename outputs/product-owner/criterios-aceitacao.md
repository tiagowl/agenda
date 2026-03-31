# Criterios de Aceitacao

## US-01 - Login da aplicacao
- Dado credenciais corretas no login, quando eu autenticar, entao devo acessar a tela principal.
- Dado credenciais invalidas, quando eu tentar autenticar, entao devo ver mensagem de erro.
- Caso extremo: campos vazios devem bloquear submissao e destacar validacao.

## US-02/03/04 - CRUD de compromissos
- Dado formulario valido, quando eu salvar um compromisso, entao ele deve aparecer na agenda.
- Dado um compromisso existente, quando eu editar e salvar, entao alteracoes devem ser refletidas imediatamente.
- Dado um compromisso existente, quando eu excluir, entao ele nao deve mais aparecer nas visoes.
- Caso extremo: data/horario invalidos nao podem ser salvos.
- Validacao: nome e data/horario obrigatorios.

## US-05 - Visualizacao diaria/semanal/mensal
- Quando eu alternar entre visoes, entao os compromissos devem ser exibidos no recorte correto.
- Quando houver multiplos compromissos no mesmo dia, entao todos devem aparecer sem perda de informacao.
- Caso extremo: dias sem compromissos devem exibir estado vazio claro.

## US-06 - Persistencia local
- Dado compromissos salvos, quando eu recarregar a pagina, entao os dados devem permanecer.
- Caso extremo: `localStorage` indisponivel deve gerar feedback amigavel ao usuario.

## US-07 - Exportar JSON
- Quando eu solicitar exportacao, entao deve ser gerado arquivo JSON com todos os dados da agenda.
- O arquivo exportado deve conter estrutura valida e legivel.
- Caso extremo: sem dados cadastrados, exportacao deve gerar arquivo valido com colecao vazia.

## US-08 - Importar JSON
- Dado arquivo JSON valido, quando eu importar, entao dados devem ser carregados na agenda.
- Dado arquivo invalido, quando eu importar, entao devo receber mensagem de erro sem corromper dados atuais.
- Caso extremo: importar arquivo grande deve concluir sem travar a interface.

## US-09 - Dashboard diario
- Ao abrir dashboard, devo ver compromissos do dia vigente.
- O dashboard deve mostrar total de compromissos marcados.
- O dashboard deve mostrar total de compromissos nao realizados.
- Caso extremo: em dia sem compromissos, metricas devem ser exibidas com valores zero.
