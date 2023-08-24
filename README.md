# EcoletaTS
Criando um Projeto React com Template em TypeScript + Knex

MONTANDO A ESTRUTURA DO SERVER NODE.JS COM TYPESCRIPT USANDO SQLITE/MySQL.
-------------------------------------------------------------------------

1º Com o Powershell como admin: Instalar Chocolatey (gerenciador de pacotes do Windows);

2º Instalando NodeJS: "cinst (choco install) nodejs-lts"

3° Se for usar o Visual Studio Code (optar pela extensão: Omni da Rocketseat)
4° Se for usar o Visual Studio Code (optar pela extensão: Material Icon Theme para exibir ícones)

5º Na criação do projeto: PowerShell em nome do projeto\server : "npm init -y"

6º Terminal dentro VScode nome do projeto\server : "npm install express"

7º criar src dentro da pasta server

8º criar arquivo server.ts => Usando Tipagem  (TypeScript) 

9º instalar "npm install @types/express -D" para garantir a tipagem no 
desenvolvimento da aplicação sem instalar isso em producao 
e usar no intelisense (CTRL + Space).

10º Instalar o TypeScript: npm install typescript -D

11º instalar o tsnode: "npm install ts-node -D" para executar o servidor

12º Criar o arquivo de configuração Typescript: "npx tsc --init"
(O npx executa pacotes do node, onde se não for encontrado ele baixa e instala posteriormente)

13º Terminal dentro VScode nome do projeto\server: 
"npx ts-node src/server.ts" para executar o servidor.

14º Instalar o executador de servidor automático pra não que ficar parando e startando:
 "npm install ts-node-dev -D" 

15º Terminal dentro VScode nome do projeto\server: "npx ts-node-dev src/server.ts" 
para executar o servidor que se auto reinica a cada modificação no código.

16º Abrir o arquivo package.json adicionar em scripts:
"dev" : "ts-node-dev src/server.ts" a fim de utilizar o 
o comando: "npm run dev" que resume o comando em scripts/dev.

17º Terminal dentro VScode voltando ao nome do projeto: 
"npx create-react-app web --template=typescript"
Instala o react na criando a pasta web com o template em TS.

18º Terminal projeto\web => "npm start" 
para rodar o frontend do React.

19º Alterações devem ser feitas no src\App.tsx que as mudanças são alteradas ao vivo no navegador.

20º ter o Insomnia instalado no pc:teste de Requisições HTTP semelhante ao POSTMAN só que gratuito.
(https://insomnia.rest/)

21º Não esquecer de colocar no cabeçalho do servidor o uso do express.json() 
pra entender que a requisição POST do cliente é do tipo JSON.

//Query Params: Parametros opcionais como filtros Ex: ?search=1
//Request Params: São parametros que vem na própria rota que identificam o recurso
//Request body: Parametros principais de envio de informações de formulário/JSON/AJAX .

22º Utilização do Knex.JS para uso de comunicações em JS/BD.
Terminal dentro VScode nome do projeto\server: "npm install knex" e 
após o tipo do banco utilizado: "npm install sqlite3";
ou "npm install mysql" (MySQL 5.7) ou "npm install mysql2" (MySQL 8);

23º Tabelas:
points 		(image,name,email,whatsapp,latitude,longitude city e uf)
items  		(image,title)
points_items 	(point_id, item_id)

24º Criando tabelas utilizando documentação do Knex => migrations 
na pasta: src/database/migrations/00,01,02 .

25º Executar em projeto\server:
"npx knex --knexfile knexfile.ts migrate:latest"
ou colocar em package.json em scripts =>
iniciar: "knex --knexfile knexfile.ts migrate:latest"
e usar o "npm run iniciar"

26º Executar em projeto\server:
"npx knex --knexfile knexfile.ts seed:run"
ou colocar em package.json em scripts =>
criar-itens: "knex --knexfile knexfile.ts seed:run"
e usar o "npm run criar-itens"

26º Instalar o pacote  de extensões sqlite no VSCode (alexcvzz)
Ctrl+Shift+P = digitar SQLite = Open Database;
Para alterações direto no Banco:
Botão direito na tabela: use o select ou Insert pra abrir um local de escrita de SQL,
modifique a query.
Ctrl+Shift+P = digitar SQLite = Run Query;

27º Instalar o CORS: 
Executar em projeto\server: "npm install cors". 
Executar em projeto\server: "npm install @types/cors -D"

28º unsplash.com (repositório de imagens gratuitas)

MONTANDO A ESTRUTURA WEB.
-------------------------------------------------------------------------
(Já deixar o servidor escutando na porta 3333: npm run dev)

1º Terminal dentro VScode nome do projeto\web: code. (abre o projeto dessa pasta no VSCode)

2º Limpando a Estrutura:

pasta public: Apagar tudo menos o index.html
pasta src: Apagar: App.test.tsx, index.css,logo.svg, serviceWorker.ts, setupTests.ts e o README.md.

3º Remover as Dependências dos arquivos no conteudo dos documentos que sobraram.

4º Terminal dentro VScode nome do projeto\web: npm start

5º Ativar o Emmet dentro do VSCode para uso de Javascript. (Nova versão do VSCode não precisa modificar o JSON)
CTRL+SHIFT+P :digitar json. Preferences: Open Settings (JSON)

6º Instalar Icones Comuns de Uso no React (Material Icon + FontAwesome): npm install react-icons 

7º Instalar Roteamento de páginas React: npm install react-router-dom  (conferir documentação na versão 6)

8º Integrar Mapa sem ser do google (Código Aberto): Leaflet (react-leaflet) : 

projeto\web: npm install leaflet react-leaflet
Using TypeScript: projeto\web: npm install -D @types/leaflet
