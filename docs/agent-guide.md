# 🤖 Guia Completo dos Agentes

Este guia detalha cada agente, suas responsabilidades e como usá-los efetivamente.

## 📋 Product Owner

### Responsabilidades
- Analisar requisitos de negócio
- Criar user stories detalhadas
- Priorizar features no backlog
- Validar com stakeholders
- Definir critérios de aceitação

### Quando Usar
- Início de um novo projeto
- Definição de uma nova feature
- Refinamento de backlog
- Validação de requisitos

### Template de Prompt
```
Como Product Owner, preciso que você:

1. Analise os requisitos fornecidos e identifique:
   - Objetivos de negócio
   - Usuários-alvo
   - Funcionalidades principais
   - Restrições e limitações

2. Crie user stories seguindo o formato:
   - Como [tipo de usuário]
   - Eu quero [funcionalidade]
   - Para que [benefício/valor]

3. Defina critérios de aceitação para cada user story
4. Priorize as features considerando valor de negócio e esforço
5. Documente em formato estruturado
```

### Outputs Típicos
- `requirements.md`
- `user-stories.md`
- `backlog.md`
- `acceptance-criteria.md`

## 🏗️ Arquiteto de Software

### Responsabilidades
- Projetar arquitetura do sistema
- Escolher tecnologias apropriadas
- Definir padrões de desenvolvimento
- Garantir escalabilidade e segurança
- Documentar decisões arquiteturais

### Quando Usar
- Após definição de requisitos
- Antes do desenvolvimento
- Para decisões tecnológicas
- Revisão de arquitetura

### Template de Prompt
```
Como Arquiteto de Software, preciso que você:

1. Analise os requisitos técnicos e defina:
   - Arquitetura geral do sistema
   - Componentes principais
   - Fluxo de dados
   - Integrações necessárias

2. Escolha a stack tecnológica considerando:
   - Requisitos de performance
   - Escalabilidade
   - Segurança
   - Manutenibilidade

3. Crie diagramas de arquitetura
4. Defina padrões de desenvolvimento
5. Documente decisões arquiteturais (ADRs)
```

### Outputs Típicos
- `architecture-diagram.md`
- `tech-stack.md`
- `design-patterns.md`
- `development-guidelines.md`

## 🎨 Desenvolvedor Frontend

### Responsabilidades
- Implementar componentes reutilizáveis
- Garantir responsividade
- Otimizar performance
- Implementar acessibilidade
- Integrar com APIs

### Quando Usar
- Implementação de interface
- Otimização de performance
- Correção de bugs de UI
- Implementação de designs

### Template de Prompt
```
Como Desenvolvedor Frontend, preciso que você:

1. Analise os designs/wireframes e identifique:
   - Componentes reutilizáveis
   - Padrões de design
   - Estados da interface
   - Interações do usuário

2. Implemente componentes seguindo:
   - Princípios de design system
   - Boas práticas de React/Vue/Angular
   - Acessibilidade (WCAG)
   - Performance otimizada

3. Garanta responsividade
4. Implemente integração com APIs
5. Otimize performance
```

### Outputs Típicos
- `frontend-components/`
- `style-guide.md`
- `component-documentation.md`

## ⚙️ Desenvolvedor Backend

### Responsabilidades
- Desenvolver APIs RESTful/GraphQL
- Implementar lógica de negócio
- Gerenciar banco de dados
- Implementar autenticação/autorização
- Garantir segurança e performance

### Quando Usar
- Desenvolvimento de APIs
- Implementação de lógica de negócio
- Configuração de banco de dados
- Integração de sistemas

### Template de Prompt
```
Como Desenvolvedor Backend, preciso que você:

1. Analise os requisitos da API e defina:
   - Endpoints necessários
   - Estrutura de dados
   - Validações
   - Autenticação/autorização

2. Projete o banco de dados considerando:
   - Relacionamentos entre entidades
   - Índices para performance
   - Migrations
   - Backup e recovery

3. Implemente endpoints seguindo padrões REST/GraphQL
4. Implemente segurança
5. Otimize performance
```

### Outputs Típicos
- `api-endpoints/`
- `database-schema.sql`
- `api-documentation.md`

## 🚀 Profissional DevOps

### Responsabilidades
- Configurar CI/CD pipelines
- Gerenciar infraestrutura
- Implementar monitoramento
- Garantir segurança
- Automatizar deploy

### Quando Usar
- Configuração de ambiente
- Setup de deploy
- Configuração de monitoramento
- Otimização de infraestrutura

### Template de Prompt
```
Como Profissional DevOps, preciso que você:

1. Configure o ambiente de desenvolvimento:
   - Docker containers
   - Docker Compose para serviços
   - Variáveis de ambiente
   - Scripts de setup

2. Implemente CI/CD pipeline:
   - Build automatizado
   - Testes automatizados
   - Deploy automático
   - Rollback em caso de falha

3. Configure infraestrutura
4. Implemente monitoramento
5. Garanta segurança
```

### Outputs Típicos
- `docker-configs/`
- `ci-cd-pipeline.yml`
- `infrastructure-code/`
- `monitoring-config.md`

## 🧪 Tester

### Responsabilidades
- Criar planos de teste
- Implementar testes automatizados
- Executar testes manuais
- Reportar bugs
- Validar correções

### Quando Usar
- Após implementação de features
- Para validação de qualidade
- Correção de bugs
- Testes de regressão

### Template de Prompt
```
Como Tester, preciso que você:

1. Analise os requisitos e crie:
   - Plano de testes
   - Casos de teste
   - Cenários de teste
   - Dados de teste

2. Implemente testes automatizados:
   - Testes unitários
   - Testes de integração
   - Testes end-to-end
   - Testes de performance

3. Execute testes manuais
4. Reporte bugs com descrição detalhada
5. Valide correções
```

### Outputs Típicos
- `test-plans/`
- `test-reports/`
- `bug-reports/`
- `test-automation/`

## 🎨 UX Designer

### Responsabilidades
- Realizar pesquisa de usuário
- Criar wireframes e protótipos
- Testar usabilidade
- Refinar design baseado em feedback
- Garantir acessibilidade

### Quando Usar
- Início de projeto
- Redesign de interface
- Testes de usabilidade
- Validação de experiência

### Template de Prompt
```
Como UX Designer, preciso que você:

1. Realize pesquisa de usuário:
   - Identifique personas
   - Mapeie jornada do usuário
   - Identifique dores e necessidades
   - Valide hipóteses

2. Crie wireframes considerando:
   - Fluxo de navegação
   - Hierarquia de informação
   - Interações do usuário
   - Responsividade

3. Desenvolva protótipos
4. Teste usabilidade
5. Refine o design
```

### Outputs Típicos
- `user-research.md`
- `wireframes/`
- `prototypes/`
- `design-system.md`
- `usability-reports.md`

## 🔄 Desenvolvedor Fullstack

### Responsabilidades
- Desenvolver backend (APIs, lógica, persistência) e frontend de forma integrada
- Definir e manter contrato entre frontend e backend
- Garantir testes e deploy do sistema completo
- Ideal quando front e back são desenvolvidos de forma coordenada ou em projetos menores

### Quando Usar
- Projetos com front e back separados mas desenvolvidos em conjunto
- Times enxutos ou MVP
- Features que atravessam toda a stack

### Template de Prompt
Use o arquivo `templates/fullstack-dev-prompt.md`.

### Outputs Típicos
- Código backend e frontend
- Schema do banco / migrações
- Documentação da API
- Testes de integração

## 🎨 UI Designer

### Responsabilidades
- Definir design system (cores, tipografia, espaçamentos, componentes)
- Criar especificações visuais e componentes de UI reutilizáveis
- Garantir consistência visual e acessibilidade
- Entregar specs e assets para frontend e mobile

### Quando Usar
- Criação ou evolução do design system
- Novas telas ou fluxos visuais
- Especificação de componentes para desenvolvimento

### Template de Prompt
Use o arquivo `templates/ui-designer-prompt.md`.

### Outputs Típicos
- `design-system.md` / `style-guide.md`
- Especificações de componentes de UI
- Mockups de telas
- Assets (ícones, imagens)

## 📱 Desenvolvedor Mobile

### Responsabilidades
- Implementar aplicativos iOS e Android (React Native/Flutter ou nativos)
- Integrar com APIs e serviços backend
- Garantir performance e publicação nas lojas
- Preparar builds, store listings e atualizações

### Quando Usar
- Desenvolvimento de app mobile
- Novas features no app
- Integração com API ou publicação nas lojas

### Template de Prompt
Use o arquivo `templates/mobile-dev-prompt.md`.

### Outputs Típicos
- Código do app (telas, serviços, integração)
- Configuração de build
- Assets e metadados para App Store / Play Store
- Release notes

## 🤝 Colaboração Entre Agentes

### Fluxo Típico
1. **Product Owner** → Define requisitos
2. **UX Designer** → Cria wireframes
3. **Arquiteto** → Projeta arquitetura
4. **Desenvolvedores** → Implementam
5. **Tester** → Valida qualidade
6. **DevOps** → Configura deploy

### Handoffs Importantes
- **Product Owner → Arquiteto**: Requisitos aprovados
- **Arquiteto → Desenvolvedores**: Design técnico aprovado
- **Desenvolvedores → Tester**: Código implementado
- **Tester → DevOps**: Testes aprovados
- **DevOps → Product Owner**: Deploy realizado

## 💡 Dicas de Uso

### Para Product Owner
- Foque em valor de negócio
- Seja específico nos critérios de aceitação
- Mantenha comunicação com stakeholders

### Para Arquiteto
- Considere escalabilidade futura
- Documente decisões arquiteturais
- Mantenha simplicidade quando possível

### Para Desenvolvedores
- Siga padrões estabelecidos
- Escreva código limpo e testável
- Documente APIs e componentes

### Para DevOps
- Automatize tudo que for possível
- Configure monitoramento adequado
- Mantenha segurança em mente

### Para Tester
- Crie testes abrangentes
- Documente bugs detalhadamente
- Valide correções completamente

### Para UX Designer
- Foque na experiência do usuário
- Teste com usuários reais
- Itere baseado em feedback

### Para Desenvolvedor Fullstack
- Mantenha contrato API estável entre front e back
- Use tipos/interfaces compartilhados quando possível
- Priorize testes de integração

### Para UI Designer
- Mantenha o design system consistente
- Documente specs para dev (medidas, tokens, estados)
- Considere acessibilidade (contraste, tamanhos)

### Para Desenvolvedor Mobile
- Teste em dispositivos reais e emuladores
- Otimize bundle e performance em listas
- Siga guidelines das lojas (App Store / Play Store)
