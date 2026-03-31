# Diagramas de Arquitetura

## Diagrama 1 - Visao geral do sistema
```mermaid
flowchart TD
    U[Usuario - Mobile Browser] --> UI[Vue UI Layer]
    UI --> ST[Pinia Store]
    ST --> DM[Domain Services + Validators]
    ST --> LS[(localStorage)]
    UI --> DT[Data Transfer Module]
    DT --> JSON[JSON File Import/Export]
```

## Diagrama 2 - Componentes e responsabilidades
```mermaid
flowchart LR
    A[Auth Module] --> S[Shared Store]
    C[Schedule Module] --> S
    V[Calendar Views Module] --> S
    D[Dashboard Module] --> S
    T[Data Transfer Module] --> S
    S --> P[Persistence Adapter localStorage]
```

## Diagrama 3 - Fluxo de CRUD de compromisso
```mermaid
sequenceDiagram
    participant User as Usuario
    participant View as Vue View
    participant Store as Pinia Store
    participant Rules as Domain Validator
    participant Persist as localStorage Adapter

    User->>View: Preenche formulario e salva
    View->>Store: createOrUpdateCommitment(payload)
    Store->>Rules: validar(payload)
    Rules-->>Store: ok/erro
    alt valido
        Store->>Persist: save(state)
        Persist-->>Store: sucesso
        Store-->>View: estado atualizado
        View-->>User: feedback de sucesso
    else invalido
        Store-->>View: erros de validacao
        View-->>User: mensagens inline
    end
```

## Diagrama 4 - Fluxo de importacao JSON
```mermaid
sequenceDiagram
    participant User as Usuario
    participant View as Import View
    participant Parser as JSON Parser
    participant Validator as Schema Validator
    participant Store as Pinia Store
    participant Persist as localStorage Adapter

    User->>View: Seleciona arquivo JSON
    View->>Parser: parse(file)
    Parser-->>View: objeto/jsonError
    View->>Validator: validate(schema)
    alt valido
        View->>Store: replaceState(data)
        Store->>Persist: save(state)
        View-->>User: importacao concluida
    else invalido
        View-->>User: erro e manter dados atuais
    end
```
