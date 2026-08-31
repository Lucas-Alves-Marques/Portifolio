# 💼 Portfólio - Lucas Alves

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Knex.js](https://img.shields.io/badge/Knex.js-E16428?style=for-the-badge&logo=knex.js&logoColor=white)

</div>

---

## 📌 Sobre o Projeto

Este é o projeto de portfólio pessoal e profissional de **Lucas Alves** (Desenvolvedor de Software Jr.), desenvolvido com uma arquitetura **Full Stack** moderna, desacoplada e responsiva. 

A aplicação visa apresentar projetos, atividades acadêmicas/práticas e competências técnicas, permitindo que recrutadores e desenvolvedores conheçam a trajetória do autor e acessem diretamente os repositórios de código e contatos.

---

## ✨ Funcionalidades

- ⚡ **Apresentação e Bio**: Introdução profissional com destaques das principais stacks e foto de perfil estilizada.
- 📂 **Carrossel Interativo de Projetos e Atividades**: Navegação horizontal dinâmica com suporte a scroll suave, controles laterais e animação de entrada.
- 🏷️ **Tags de Tecnologias**: Exibição das tecnologias e bibliotecas utilizadas em cada projeto.
- 🔗 **Links Diretos**: Acesso direto aos repositórios no GitHub de cada trabalho listado.
- 📄 **Download de Currículo**: Acesso rápido para baixar o CV em formato PDF no cabeçalho da página.
- 📬 **Seção de Contatos**: Links diretos para GitHub, LinkedIn e envio de e-mail.
- 📱 **Design Responsivo & Dark Theme**: Interface estilizada com identidade visual moderna.

---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
- **[Next.js](https://nextjs.org/)** (v16 - App Router)
- **[React](https://react.dev/)** (v19)
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** (v4)
- **[React Icons](https://react-icons.github.io/react-icons/)**
- **[Google Fonts (Jockey One)](https://fonts.google.com/specimen/Jockey+One)**

### **Back-end**
- **[Node.js](https://nodejs.org/)** (ES Modules)
- **[Express](https://expressjs.com/)** (v5)
- **[Knex.js](https://knexjs.org/)** (Query Builder para SQL)
- **[MySQL2](https://github.com/sidorares/node-mysql2)**
- **[CORS](https://github.com/expressjs/cors)**
- **[Dotenv](https://github.com/motdotla/dotenv)**
- **[Nodemon](https://nodemon.io/)** (Ambiente de desenvolvimento)

---

## 📁 Estrutura do Projeto

```plaintext
Portifolio/
├── BackEnd/                    # API REST em Node.js e Express
│   ├── helpers/                # Configuração de conexão e scripts SQL
│   │   ├── connectionDB.js     # Configuração da conexão Knex com MySQL
│   │   └── scriptDB.sql        # Script de criação do banco e tabela
│   ├── modules/                # Regra de negócio e rotas
│   │   ├── controllers/        # Controladores com filtros por tipo
│   │   ├── data/               # Camada de acesso ao banco de dados
│   │   └── routes/             # Definição das rotas da API
│   ├── .env                    # Variáveis de ambiente da base de dados
│   ├── index.js                # Ponto de entrada do servidor Express
│   └── package.json            # Dependências e scripts do BackEnd
│
├── FrontEnd/                   # Aplicação Next.js + React + TypeScript
│   ├── app/                    # Estrutura do Next.js App Router
│   │   ├── globals.css         # Estilos globais e configurações de tema
│   │   ├── layout.tsx          # Layout base com fontes e cabeçalho
│   │   └── page.tsx            # Página principal
│   ├── components/             # Componentes React modulares
│   │   ├── cards/              # Componente de Card de projeto
│   │   └── sections/           # Seções da página (Apresentação, Projetos, Atividades)
│   ├── config/                 # Configurações globais (URL base da API)
│   ├── images/                 # Imagens estáticas e assets
│   ├── layout/                 # Componentes de layout (Header, Footer, Container)
│   ├── public/                 # Arquivos públicos (ex: Currículo em PDF)
│   ├── types/                  # Definições de tipos TypeScript
│   └── package.json            # Dependências e scripts do FrontEnd
│
└── README.md                   # Documentação do projeto
```

---

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior recomendada)
- [MySQL](https://www.mysql.com/) instalado e rodando
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)

---

### 1️⃣ Configuração do Banco de Dados

1. Acesse o seu gerenciador MySQL (ex: MySQL Workbench, DBeaver ou terminal) e execute o script contido em `BackEnd/helpers/scriptDB.sql`:

```sql
CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE projects (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(200)                   NULL,
    description VARCHAR(200)                   NULL,
    tags        JSON                           NULL,
    type        ENUM ('Project', 'Activities') NULL,
    link_repos  TEXT                           NULL,
    link_img    TEXT                           NULL
);
```

2. Popule a tabela com seus projetos e atividades conforme o formato esperado. Exemplo de inserção:

```sql
INSERT INTO projects (name, description, tags, type, link_repos, link_img)
VALUES (
  'Meu Projeto',
  'Descrição detalhada do projeto desenvolvido.',
  '["React", "Node.js", "TypeScript"]',
  'Project',
  'https://github.com/Lucas-Alves-Marques/meu-projeto',
  'https://link-da-imagem.com/imagem.png'
);
```

---

### 2️⃣ Configuração e Execução do Back-end

1. Abra o terminal e navegue até a pasta `BackEnd`:
```bash
cd BackEnd
```

2. Instale as dependências:
```bash
npm install
```

3. Crie ou ajuste o arquivo `.env` na raiz da pasta `BackEnd` com as credenciais do seu banco de dados MySQL:
```env
HOST_KNEX=localhost
DBUSER_KNEX=root
PASSWORD_KNEX=sua_senha
DATABASE_KNEX=portfolio
PORT_KNEX=3306
```

4. Inicie o servidor do Back-end:
```bash
node index.js
# ou utilizando nodemon:
npx nodemon index.js
```
> O servidor estará rodando em: `http://localhost:3001`

---

### 3️⃣ Configuração e Execução do Front-end

1. Abra um novo terminal e navegue até a pasta `FrontEnd`:
```bash
cd FrontEnd
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador:
```
http://localhost:3000
```

---

## 📡 Rotas da API (Back-end)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/dataBase/projects` | Retorna todos os registros com `type = 'Project'` |
| `GET` | `/dataBase/activities` | Retorna todos os registros com `type = 'Activities'` |

---

## 👤 Autor

**Lucas Alves**  
*Desenvolvedor de Software Jr.*

- 🐙 **GitHub**: [@Lucas-Alves-Marques](https://github.com/Lucas-Alves-Marques)
- 💼 **LinkedIn**: [Lucas Alves](https://www.linkedin.com/in/lucas-alves-752055214)
- 📧 **E-mail**: [lucas.marquesalv24@gmail.com](mailto:lucas.marquesalv24@gmail.com)

---

Desenvolvido por Lucas Alves.