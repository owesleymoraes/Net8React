# Projeto FullStack com .NET e React

Este projeto é uma aplicação full-stack desenvolvido utilizando .NET 8 no backend e React com TypeScript no frontend.

## Backend (.NET 8)

### Tecnologias Utilizadas:

- **Linguagem**: C#
- **Framework**: .NET 8
- **IDE**: Visual Studio Code
- **Banco de Dados**: MySQL
- **Migrações**: Entity Framework Core Migrations

### Configuração e Execução:

1. **Configuração do Ambiente**:

   - Instalar .NET 8 SDK
   - Instalar MySQL Server
   - Configurar variáveis de ambiente necessárias

2. **Inicialização do Projeto**:
   - Clonar o repositório
   - Configurar conexão com o banco de dados no arquivo `appsettings.json`
   - Executar comandos via CLI para migrations e inicialização do projeto

Exemplo de comandos CLI:

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```

## Frontend (React com TypeScript)

### Tecnologias Utilizadas:

- **Biblioteca**: React
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Comunicação com Backend**: Axios
- **Gerenciamento de Estado**: React Query

### Arquitetura e Estrutura:

- **Componentização**: Componentes React reutilizáveis
- **Divisão de Responsabilidades**: Separação clara entre lógica, apresentação e estilos

### Telas Principais:

1. **Listagem de Alunos**

   ![Incluir link para a imagem da Listagem de Alunos](./img/list-student.png)

2. **Formulário de Cadastro**

   ![Incluir link para a imagem da Listagem de Alunos](./img/form-student.png)

3. **Componente Load**

   ![Incluir link para a imagem da Listagem de Alunos](./img/load.png)

4. **Componente de Erro**

   ![Incluir link para a imagem da Listagem de Alunos](./img/error.png)

5. **API**

   ![Incluir link para a imagem da Listagem de Alunos](./img/api.png)

### Configuração e Execução:

1. **Inicialização do Projeto:**
   - Clonar o repositório
   - Instalar dependências: `npm install`
   - Iniciar o servidor de desenvolvimento: `npm run dev`

### Ícones das Tecnologias Utilizadas:

- .NET: <img align="center" alt="Dotnet" height="28" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />

- MySql: <img align="center" alt="MySql" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
- React: <img  align="center" alt="React" height="24" width="24" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg">
- TypeScript: <img  align="center" alt="Ts" height="24" width="32" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
- Tailwind CSS: <img align="center" alt="Tailwindy" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
- Axios: <img align="center" alt="axios" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" />
- React Query: <img align="center" alt="react-query" height="30" width="28" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1.12em' height='1em' viewBox='0 0 256 230'%3E%3Cpath fill='%2300435b' d='m157.98 142.487l-4.91 8.527a8.29 8.29 0 0 1-7.182 4.151H108.27a8.29 8.29 0 0 1-7.182-4.151l-4.911-8.527zm13.747-23.87l-8.658 15.034h-71.98l-8.658-15.034zm-8.34-23.342l8.354 14.506H82.417l8.354-14.506zm-17.5-22.066a8.29 8.29 0 0 1 7.183 4.151l5.228 9.079H95.86l5.229-9.079a8.29 8.29 0 0 1 7.182-4.151z'/%3E%3Cpath fill='%23002b3b' d='M53.523 69.252c-4.167-20.206-5.062-35.704-2.368-46.957c1.602-6.693 4.53-12.153 8.984-16.093c4.702-4.159 10.646-6.2 17.326-6.2c11.018 0 22.602 5.025 34.98 14.57c5.05 3.894 10.29 8.587 15.732 14.082c.434-.557.923-1.083 1.469-1.57c15.386-13.71 28.34-22.23 39.42-25.514c6.588-1.954 12.773-2.14 18.405-.244c5.946 2 10.683 6.137 14.026 11.93c5.516 9.561 6.97 22.124 4.914 37.637c-.838 6.323-2.271 13.21-4.296 20.673c.764.092 1.53.262 2.288.513c19.521 6.47 33.345 13.426 41.714 21.377c4.98 4.73 8.231 9.996 9.407 15.826c1.24 6.153.03 12.324-3.308 18.113c-5.506 9.548-15.63 17.077-30.052 23.041c-5.79 2.395-12.343 4.564-19.664 6.515c.334.754.594 1.555.767 2.395c4.167 20.206 5.061 35.704 2.368 46.957c-1.602 6.693-4.531 12.153-8.985 16.093c-4.701 4.159-10.646 6.2-17.325 6.2c-11.019 0-22.602-5.025-34.98-14.57c-5.104-3.936-10.402-8.687-15.907-14.258a11.7 11.7 0 0 1-2.084 2.442c-15.386 13.712-28.34 22.23-39.42 25.515c-6.588 1.954-12.773 2.14-18.405.244c-5.946-2-10.683-6.137-14.026-11.93c-5.516-9.561-6.97-22.124-4.914-37.637c.869-6.551 2.376-13.709 4.518-21.485a11.7 11.7 0 0 1-2.51-.537c-19.521-6.47-33.345-13.426-41.714-21.377c-4.98-4.73-8.231-9.996-9.407-15.826c-1.24-6.153-.03-12.325 3.308-18.114c5.506-9.547 15.63-17.077 30.052-23.04c5.963-2.467 12.734-4.693 20.32-6.689a12 12 0 0 1-.633-2.082'/%3E%3Cpath fill='%23ff4154' d='M189.647 161.333a3.684 3.684 0 0 1 4.235 2.81l.023.112l.207 1.075q10.065 52.915-14.18 52.915q-23.72 0-60.392-45.153a3.684 3.684 0 0 1 2.777-6.005h.114l1.288.009q15.432.084 30.004-1.076q17.2-1.37 35.924-4.687M78.646 134.667l.062.105l.646 1.127q7.765 13.5 16.18 25.627q9.912 14.28 22.29 28.914a3.684 3.684 0 0 1-.309 5.082l-.093.083l-.83.715q-40.96 35.096-53.244 14.012q-12.025-20.636 8.719-75.047a3.683 3.683 0 0 1 6.579-.618m124.857-52.054l.112.037l1.028.354q50.557 17.588 38.416 38.655q-11.874 20.605-69.041 30.004a3.683 3.683 0 0 1-3.773-5.501q8.188-13.928 14.749-27.717q7.44-15.638 13.965-33.57a3.684 3.684 0 0 1 4.432-2.295zM84.446 76.71a3.683 3.683 0 0 1 1.31 5.042q-8.19 13.927-14.75 27.717q-7.44 15.637-13.965 33.57a3.684 3.684 0 0 1-4.544 2.262l-.112-.037l-1.028-.355Q.8 127.322 12.941 106.255Q24.815 85.65 81.982 76.25c.85-.14 1.722.022 2.464.459m108.206-57.748q12.025 20.637-8.719 75.048a3.683 3.683 0 0 1-6.579.618l-.062-.105l-.646-1.127q-7.765-13.5-16.18-25.627q-9.912-14.28-22.29-28.914a3.684 3.684 0 0 1 .309-5.082l.093-.083l.83-.715q40.96-35.095 53.244-14.013M77.45 10.59q23.721 0 60.392 45.152a3.684 3.684 0 0 1-2.777 6.005h-.114l-1.288-.008q-15.431-.084-30.003 1.076q-17.202 1.37-35.925 4.687a3.684 3.684 0 0 1-4.234-2.81l-.024-.113l-.207-1.074Q53.204 10.59 77.45 10.59'/%3E%3Cpath fill='%23ffd94c' d='M111.295 73.67h31.576a12.89 12.89 0 0 1 11.181 6.475l15.855 27.626a12.89 12.89 0 0 1 0 12.834l-15.855 27.626a12.89 12.89 0 0 1-11.181 6.475h-31.576c-4.618 0-8.883-2.47-11.182-6.475L84.26 120.605a12.89 12.89 0 0 1 0-12.834l15.854-27.626a12.89 12.89 0 0 1 11.182-6.475m26.763 8.338c4.62 0 8.888 2.473 11.185 6.481l11.056 19.288a12.89 12.89 0 0 1 0 12.822l-11.056 19.288a12.89 12.89 0 0 1-11.185 6.48h-21.95c-4.62 0-8.888-2.472-11.185-6.48l-11.056-19.288a12.89 12.89 0 0 1 0-12.822l11.056-19.288a12.89 12.89 0 0 1 11.184-6.48zm-5.187 9.12h-11.576a12.89 12.89 0 0 0-11.179 6.47l-5.842 10.167a12.89 12.89 0 0 0 0 12.846l5.842 10.168a12.89 12.89 0 0 0 11.179 6.47h11.576c4.616 0 8.88-2.468 11.179-6.47l5.842-10.168a12.89 12.89 0 0 0 0-12.846l-5.842-10.168a12.89 12.89 0 0 0-11.179-6.47m-4.994 8.729c4.612 0 8.873 2.464 11.173 6.46l.829 1.44a12.89 12.89 0 0 1 0 12.862l-.829 1.44a12.89 12.89 0 0 1-11.173 6.46h-1.588a12.89 12.89 0 0 1-11.173-6.46l-.829-1.44a12.89 12.89 0 0 1 0-12.862l.829-1.44a12.89 12.89 0 0 1 11.173-6.46zm-.792 8.599a5.74 5.74 0 0 0-4.97 2.866a5.73 5.73 0 0 0 0 5.732a5.738 5.738 0 0 0 9.937 0a5.73 5.73 0 0 0 0-5.732a5.74 5.74 0 0 0-4.967-2.866m-46.509 5.732h10.32'/%3E%3C/svg%3E">
