## Descrição
Criar um site em React, que aborde alguns requisitos:
- Ter um menu/página público: home, about, sign in, log in. (Não precisa ter conteúdos, pode ser lorem-ipsum);
- Ter um menu/página privado após logado (dashboard);
- Criar o layout com foco em CSS;
- Utilizar Redux;
- API pode ser um mock das requisições, não precisa salvar em um banco necessariamente.

Resumo: Um site app, com opção pra se cadastrar e depois se logar ao dashboard.

Será avaliado:
- Estrutura do projeto, como é feito a componentização do mesmo;
- A utilização do Redux;
- Layout criado (beleza e código/estrutura do CSS);
- Versionamento do projeto no GIT (os commits);



## Necessário ter em sua máquina
<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a> (versão LTS)</li>
  <li>Npm (séra instalado junto com o Node.js)</li>
  <li>json-server (npm install -g json-server)</li>
</ul>

## Executando o projeto
<ul>
 <li>Clonar o repositório</li>
 <li>Em seu terminal você deve acessar a pasta do repositório clonado</li>
 <li>Digitar os comandos: npm install e npm start (após executar o comando npm start, basta esperar alguns minutos e irá abrir uma aba em seu navegador com o projeto sendo executado)</li>
  <li>Executar o json-server (json-server server.json -p 3001)</li>
</ul>

## Home 
![thechecker](https://user-images.githubusercontent.com/37129994/58501318-80d51a00-815a-11e9-8377-48edda2fea46.png)

## Dashboard
![thechekes](https://user-images.githubusercontent.com/37129994/58501473-e1fced80-815a-11e9-9651-114a6861c52a.png)


<strong>Obs:</strong>Durante o desafio consegui reforçar ainda mais meus conhecimentos em ReactJs e aprender um pouco mais 
sobre Redux Saga. 
O meu objetivo enquanto fazia a aplicação, era fazer uma consulta na API do github com base no nome que seria disponibilizado na tela Home, após feita a consulta o usuário seria redirecionado para o Dashboard, onde teria acesso à informações do usuário como nome, bio, repositórios...
