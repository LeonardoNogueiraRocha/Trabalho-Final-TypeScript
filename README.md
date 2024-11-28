# Sistema de Exames

## Visão Geral
Este sistema foi desenvolvido para gerenciar o cadastro de empresas conveniadas, pacientes e agendamentos de exames. Ele utiliza **HTML**, **CSS**, **JavaScript** (TypeScript) e **LocalStorage** para armazenamento de dados, sem a necessidade de um banco de dados externo. O sistema permite que os usuários cadastrem empresas e pacientes, e façam o agendamento de exames, visualizando as listas de todos os dados cadastrados.

## Funcionalidades

### 1. Cadastro de Empresas
- O sistema permite o cadastro de empresas conveniadas que prestam serviços de exames.
- **Campos**:
  - Nome da empresa.
- **Armazenamento**: As informações são armazenadas no `localStorage` do navegador.
- **Lista de Empresas**: As empresas cadastradas são exibidas em uma lista logo após o cadastro.
  
### 2. Cadastro de Pacientes
- O sistema permite o cadastro de pacientes que irão realizar exames.
- **Campos**:
  - Nome do paciente.
- **Armazenamento**: Os dados dos pacientes são armazenados no `localStorage`.
- **Lista de Pacientes**: A lista de pacientes cadastrados é exibida logo após o cadastro.

### 3. Agendamento de Exames
- O sistema permite o agendamento de exames para pacientes, associando-os a uma empresa conveniada.
- **Campos**:
  - Nome do paciente.
  - Nome da empresa conveniada.
  - Data do exame.
  - Horário do exame.
- **Armazenamento**: As informações de agendamento são armazenadas no `localStorage`.
- **Lista de Agendamentos**: Todos os agendamentos são exibidos em uma lista.

### 4. Interface de Usuário
- A interface é composta por formulários simples para inserir dados, além de listas para exibir as informações cadastradas.
- A interação com o sistema é feita através de formulários e eventos de submissão (botões).

---

## Estrutura do Projeto

### Arquivos
1. **index.html** - Página principal com os formulários e as listas.
2. **empresa.ts** - Lógica de cadastro e exibição de empresas.
3. **paciente.ts** - Lógica de cadastro e exibição de pacientes.
4. **agendamento.ts** - Lógica de cadastro e exibição de agendamentos.
5. **style.css** - Arquivo de estilo para a interface.
6. **tsconfig.json** - Configuração do TypeScript.

---

## Fluxo de Dados

1. **Cadastro de Empresa**
   - O usuário preenche o formulário de cadastro de empresas e envia.
   - O nome da empresa é salvo no `localStorage`.
   - A lista de empresas é atualizada e exibida.

2. **Cadastro de Paciente**
   - O usuário preenche o formulário de cadastro de pacientes e envia.
   - O nome do paciente é salvo no `localStorage`.
   - A lista de pacientes é atualizada e exibida.

3. **Agendamento de Exame**
   - O usuário seleciona um paciente e uma empresa para o agendamento.
   - O usuário informa a data e o horário do exame.
   - O agendamento é salvo no `localStorage`.
   - A lista de agendamentos é atualizada e exibida.

---

## Tecnologias Utilizadas
- **HTML5**: Para a estrutura da página.
- **CSS3**: Para o estilo da interface.
- **JavaScript**: Para a lógica do lado do cliente e manipulação de eventos.
- **TypeScript**: Para a escrita do código de forma tipada e mais segura.
- **LocalStorage**: Para o armazenamento persistente dos dados no navegador.

---

## Como Rodar o Projeto

### Passo 1: Clone o repositório ou baixe os arquivos do projeto.

### Passo 2: Abra o arquivo `index.html` em seu navegador.

### Passo 3: O sistema estará pronto para uso. Não é necessário servidor, pois o armazenamento é feito diretamente no navegador.

---

## Funcionalidades Futuras (Possíveis Melhorias)

1. **Validação de Dados**: Adicionar validação para garantir que os dados inseridos nos formulários estejam corretos.
2. **Autenticação de Usuários**: Adicionar um sistema de login para garantir que apenas usuários autenticados possam cadastrar ou editar dados.
3. **Armazenamento em Banco de Dados**: Implementar um banco de dados real (usando backend) para armazenar as informações permanentemente.
4. **Notificações**: Implementar notificações para avisar sobre agendamentos próximos ou vencidos.
5. **Pesquisa e Filtros**: Adicionar filtros nas listas de agendamentos, empresas e pacientes para facilitar a navegação.

---

## Como Contribuir

Se você deseja contribuir com o projeto, siga os seguintes passos:
1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça as alterações necessárias.
4. Envie um pull request com uma descrição das mudanças feitas.

---

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
