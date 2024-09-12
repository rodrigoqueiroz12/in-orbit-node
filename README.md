# in.orbit

**Descrição breve do projeto**: Uma aplicação Node API construída durante o evento **NWL Pocket: JavaScript** da [Rocketseat](https://www.youtube.com/@rocketseat) que visa facilitar o gerenciamento de metas pessoais. Desenvolvido com as melhores práticas em mente para servir como backend para a aplicação React [**in.orbit**](https://github.com/rodrigoqueiroz12/in-orbit-react).

## Índice

1. [Sobre](#sobre)
2. [Funcionalidades](#funcionalidades)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Instalação](#instalação)
5. [Uso](#uso)
8. [Contato](#contato)

## Sobre

Este projeto é uma aplicação Node API feita para gerenciar metas pessoais de maneira mais fácil.

## Funcionalidades

- **Funcionalidade 1**: Criação de metas.
- **Funcionalidade 2**: Marcação de metras concluídas no dia.

## Tecnologias Utilizadas

- [**Node**](https://react.dev/): Biblioteca JavaScript para construir interfaces de usuário.
- [**Fastify**](https://react.dev/): Biblioteca JavaScript para construir interfaces de usuário.
- [**Drizzle ORM**](https://tailwindcss.com/): Framework CSS utilitário para estilização rápida e customizada.
- [**Docker**](https://lucide.dev/): Biblioteca de ícones de código aberto, leve e personalizável.
- [**Postgres**](https://vitejs.dev/): Ferramenta de build que proporciona um ambiente de desenvolvimento rápido para projetos web modernos.
- [**@paralleldrive/cuid2**](https://react-hook-form.com/): Biblioteca para gerenciamento eficiente de formulários e validação em aplicações React.
- [**Zod**](https://zod.dev/): Biblioteca TypeScript-first para validação e definição de esquemas de dados.
- [**Dayjs**](https://day.js.org/): Biblioteca JavaScript minimalista para manipulação e formatação de datas e horas.
- [**Biome JS**](https://biomejs.dev/pt-br/): Ferramenta para formatação e linting de código JavaScript e TypeScript.

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/rodrigoqueiroz12/in-orbit-node.git
    ```

2. **Acesse o diretório do projeto**:

    ```bash
    cd in-orbit-node
    ```

3. **Instale as dependências**:

    ```bash
    npm install
    ```

4. **Copie o arquivo `.env.example` e crie o `.env`**

5. **Inicie o serviço pg pelo Docker**:

    ```bash
    docker compose up -d
    ```

    Se o Docker não estiver instalado, atualize a variável `DATABASE_URL` no arquivo `.env` para utilizar o serviço PostgreSQL de sua preferência.

5. **Inicie a aplicação**:

    ```bash
    npm run dev
    ```

    Isso irá iniciar o servidor de desenvolvimento e abrir a aplicação no navegador.

**IMPORTANTE**: Para utilizar 100% do projeto, é necessário ter, também, o projeto [in-orbit-react](https://www.github.com/rodrigoqueiroz12/in-orbit-react) executando.

## Uso

Após iniciar o servidor, você pode realizar requisições à aplicação em `http://localhost:3333/`.

## Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato:

- **Nome**: Rodrigo
- **Email**: rodrigo.queiroz0629@gmail.com
- [**LinkedIn**](https://www.linkedin.com/in/rodrigo-queiroz-a113a9212)
- [**GitHub**](https://github.com/rodrigoqueiroz12)
