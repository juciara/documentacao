<div align="center">
<h1 align="center">IEE - Fatec</h1>
  :blush:	:smiley: :relaxed: :robot: :heart_eyes: :flushed: :fire:
</div>
<div align="center">
  <strong>Integração Aluno - Empresa</strong>
</div>
<div align="center">
  Um projeto <code>Equipe Web</code>. 
</div>

<br />

<div align="center">  
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/CodeIgniter-v3-blue.svg"
      alt="Standard" />
  </a>
</div>

<div align="center">
  <h3>
    <a href="ide.c9.io/wickedjhow/fatec-iee">
      Workspace C9 - Master
    </a>
    <span> | </span>
    <a href="https://trello.com/b/e6fmZZbe/fatec-web">
      Trello - Web
    </a>
    <span> | </span>
    <a href="https://fatecrl.slack.com">
      Slack
    </a>
    <span> | </span>
    <a href="">
      Gitlab
    </a>
    <span> 
    <span> | </span>
    <a href="">
      Documentação Fatec-RL
    </a>
    <span> 
  </h3>
</div>


## Tabela de Conteúdo
- [Aspectos](#aspectos)
- [Exemplos](#exemplos)
- [Instalação](#instalação)
- [Relacionamento BD](#relacionamento-bd)
- [Usando o git](#usando-o-git)
- [Automatização de desenvolvimento](#automatização-de-desenvolvimento)

## Aspectos

### Back-end

- __Cadastro de vagas:__ 
- __Listagem de vagas:__ 
- __Cadastro de empresas:__ 
- __Cadastro de alunos:__ 

### Front-end

- __CSS:__ O projeto utiliza o [bootstrap-fatec](https://github.com/fatechub/fatec-bootstrap), toda alteração de css deve ser feita na pasta `assets/css/estilo.css`, **nunca** alterar o arquivo bootstrap direto.
- __HTML:__ Pelo projeto ser feito utilizando **PHP**, é usado o conceito de MVC, onde a parte de visualização é separada da regra de negócio. É também interessante pelo fato de que um menu pode ser inserido nas páginas através de um unico arquivo .html, facilitando manutenção e escalabilidade. [MVC]() , [Views PHP]()

## Exemplos
```php
Um controller alunos.php

<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Alunos extends CI_Controller {
    
	function __construct() {
    	parent::__construct();
    	$this->load->model('alunos_model');
	}
	
	public function index(){
		$this->load->view('includes/header'); // Retorna as views
		$this->load->view('alunos/adicionar');
		$this->load->view('includes/footer');
	}

}
```

## Relacionamento BD

<div align="center">
  <img src="https://imgur.com/MiOh3Qc.jpg"
      alt="" />
</div>


## Instalação
Para instalar o projeto é necessário clonar o repositorio no seu computador e ter instalado o xamp para desenvolvimento PHP.


```sh

  // Entrar na pasta do xampp e procurar a pasta htdocs, essa pasta contém os projetos iniciados pelo servidor. Então é clonado o projeto dentro dessa pasta que o programa reconheça

  $ cd ...\xampp\htdocs 

  // Clone o repositorio

  $ git clone repo
  $ git cd Fatec-IEE

  iniciar o xamp e verificar a url 

  http://localhost/fatec-iee/

```

Após baixar o projeto é necessário alterar o arquivo config.php para o link do seu computador,
o link é acessado entrando no projeto/application/config/config.php. Deve ser alterada a base_url para a url do servidor local.

```php
// Alterar essa linha para a do seu projeto
  // Antes
  $config['base_url'] = 'https://fatec-iee-wickedjhow.c9users.io/iee/';

  // Depois
  $config['base_url'] = 'http://localhost/fatec-iee/';
```


## Usando o git

O git é uma ferramenta de versionamento de controle utilizada em praticamente todas as equipes de desenvolvimento atuais. Para instalar acesse o link [Git](https://git-scm.com). Para um tutorial envolvendo branchs seguir para o seguinte link [git - guia prático](http://rogerdudler.github.io/git-guide/index.pt_BR.html)

Master -> O que está em produção estável;

Branch -> Ambiente de altereção fora da master;



Baixar um projeto para o computador:

    git clone link-repositorio

Sempre antes de enviar alterações é importante baixar a ultima versão do repositorio

    git pull

Inserir arquivos novos e alterações para o git

    git add . (o ponto é um coringa para tudo, você pode também colocar individualmente)

Salvar mudanças

    git commit -m "Inserido arquivos relacionados as vagas"

Enviar mudanças para o servidor (quando nao estiver trabalhando em uma branch)

    git push origin master

Checar nome de branchs existentes

    git branch -r

Criar Branch

    git checkout -b novas-alterações

---

### Desenvolvimento padrão

Criar uma branch e realizar todo o versionamento nela, assim todos os arquivos ficariam com um backup caso aconteça um problema e não influenciaria no trabalho de outro desenvolvedor.

```bash
git checkout -b nome-branch
git status
git add .
git commit -m 'mensagem'
git push -u origin nome-branch

git status (conferir)
```

Inserir mudanças a branch principal (master)

```bash
git checkout master
git pull
git pull origin marys-feature
git push
```

## Automatização de Desenvolvimento

Você pode programar normalmente sem usar nenhuma ferramenta além do git, xampp ou c9, porém existem formas de automatizar algumas tarefas e aumentar a produtividade de desenvolvimento.

Junto do projeto é acompanhado uma série de scripts de um ferramenta chamada NPM, que é um pacote de gerenciamentos do Node.js.

Para utilizar o npm é necessário instalar o [Node.js](https://nodejs.org/en/download/) (vem atrelado). 

Após instalar o node você pode começar a utilizar o gulp, que é um gerenciador de tarefas do node para melhorar sua rotina de trabalho.

```bash
# Go into the repository
$ cd Fatec-IEE

# Instala as dependencias
$ npm install

# Começa a rodar as tarefas
$ gulp start
```

### Lista de tasks do gulp

- __Watch ou Start:__ Se qualquer arquivo for alterado dentro da estrutura do projeto, ele vai realizar um refresh na página no navegador, também ira realizar minificação de javascript, css e fotos.
- __Imagemin:__ Otimiza todas as imagens do projeto, sempre bom ultilizar caso tenha feito alterações ou inserções.

