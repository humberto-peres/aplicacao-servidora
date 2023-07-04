# Documentação - Desenvolvimento de Aplicação Servidora para Tutoria de Pets

## Introdução
Este documento descreve a aplicação servidora desenvolvida para permitir que um tutor (CPF, nome e e-mail) seja responsável pela tutoria de um ou mais pets, armazenando as informações do pet (código, nome e gênero) e gerenciando sua altura. A aplicação fornece uma API REST para realizar operações CRUD e consultas relacionadas a pets e altura. A tecnologia escolhida para a implementação é o Node.js, e a ferramenta utilizada para testes e manipulação do banco de dados é o Insomnia. Além disso, a aplicação implementa autenticação usando token JWT.

## Banco de Dados

Para a aplicação, utilizamos o banco de dados MySQL, utilizando o XAMPP para configurar um ambiente de desenvolvimento local.

### `Procedimento de Configuração do Banco de Dados:`

Inicie o XAMPP e verifique se os serviços do Apache e do MySQL estão em execução.]

Abra um navegador da web e acesse o phpMyAdmin, clicando no link "admin" ao lado do serviço do MySQL.

Crie um novo banco de dados chamado "tutoria" no phpMyAdmin.

Verifique se o novo banco de dados foi criado com sucesso na lista de bancos de dados do phpMyAdmin.

### `Descrição das tabelas`

**Tabela tutor**<br>
A tabela tutor possui os seguintes campos:<br>
cpf (varchar(11)): CPF do tutor (chave primária).<br>
nome (varchar(50)): Nome do tutor.<br>
fone (varchar(15)): Número de telefone do tutor.

**Tabela pet**<br>
A tabela pet possui os seguintes campos:<br>
codigo_pet (int(11)): Código do pet (chave primária).<br>
nome_pet (varchar(50)): Nome do pet.<br>
genero_pet (varchar(50)): Gênero do pet.<br>
cpf (varchar(11)) [FK]: CPF do tutor associado ao pet (chave estrangeira na tabela tutor).<br>
altura (float): Altura do pet.

**Tabela altura_pet**<br>
A tabela altura_pet possui os seguintes campos:<br>
tipo_altura (varchar(50)): Tipo de altura do pet.<br>
codigo_pet (int(11)) [FK]: Código do pet associado à altura (chave estrangeira na tabela pet).<br>
id (int(11)): Identificador da altura (chave primária).

## Rotas da API

### `Autenticação/Realizar Login`<br>
Endpoint: POST /login Descrição: Realiza o login do usuário e retorna um token JWT para autenticação posterior.<br>

### `Tutor`
**Consultar todos os Tutores**<br>
Endpoint: GET /tutor Descrição: Retorna todos os tutores cadastrados.

**Criar um Tutor**<br>
Endpoint: POST /tutor Descrição: Cria um novo tutor.

**Atualizar um Tutor**<br>
Endpoint: PUT /tutor/:cpf Descrição: Atualiza as informações de um tutor específico com base no CPF.

**Excluir um Tutor**<br>
Endpoint: DELETE /tutor/:cpf Descrição: Exclui um tutor específico com base no CPF.

### `Pet`
**Consultar todos os Pets**<br>
Endpoint: GET /pet Descrição: Retorna todos os pets cadastrados.

**Consultar Pets por Tutor**<br>
Endpoint: GET /petTutor/:cpf Descrição: Retorna os pets associados a um tutor específico com base no CPF.

**Consultar Pets por Altura**<br>
Endpoint: GET /petAltura/:altura Descrição: Retorna os pets que possuem a altura especificada.

**Criar um Pet**<br>
Endpoint: POST /pet Descrição: Cria um novo pet.

**Atualizar um Pet**<br>
Endpoint: PUT /pet/:codigo_pet Descrição: Atualiza as informações de um pet específico com base no código do pet.

**Excluir um Pet**<br>
Endpoint: DELETE /pet/:codigo_pet Descrição: Exclui um pet específico com base no código do pet.

### `Altura`
**Consultar Altura de Pet**<br>
Endpoint: GET /altura_pet Descrição: Retorna as diferentes alturas associadas aos pets.

### `Observação:`<br>
Certifique-se de fornecer detalhes adicionais, como os parâmetros esperados em cada rota, o formato de dados aceitos e as respostas retornadas.

## Testes e Utilização
Inicie o servidor da aplicação executando o comando node server.js no terminal do Visual Studio Code.
Copie o link retornado pelo terminal e utilize-o no Insomnia ou em outra plataforma de manipulação de API para realizar as requisições.
Antes de realizar qualquer requisição, é necessário fazer login para obter o token de autenticação.
Utilize as rotas disponíveis para realizar as operações CRUD, consultar tutores, pets e alturas.
Certifique-se de incluir o token JWT no cabeçalho das requisições para as rotas protegidas.

## Conclusão
Este documento descreve os procedimentos de configuração e utilização da aplicação servidora desenvolvida para gerenciar a tutoria de pets. Siga as instruções fornecidas para configurar o ambiente e utilize as rotas da API para interagir com o sistema. Certifique-se de fornecer todas as informações necessárias, como autenticação, parâmetros e respostas esperadas, ao utilizar as rotas.


