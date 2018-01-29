function main (){
  $('.btnF1').click(function(){
    
  var texto = "Testando variaveis."+
  "O texto continua aqui. " + "Concatendo texto";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F1 - Login</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f1.jpg alt=cachorro>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>");
  $('#modal-um').fadeIn('slow');
});

$(".btnF2").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F2 - Cadastro de Empresa</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/funcionalidades/f2.PNG alt=Cadastro de empresa>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>");
  $('#modal-um').fadeIn('slow');
});

$(".btnF3").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto3";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F3 - Cadastro de Vaga</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/funcionalidades/f3.PNG alt=Cadastro de vaga>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>");
  $('#modal-um').fadeIn('slow');
});

$(".btnF4").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto4";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F4 - Filtro de candidatos</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f2.jpg alt=Cadastro de empresa>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$(".btnF5").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto5";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F5 - Lista de Alunos</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f2.jpg alt=cachorro>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$(".btnF6").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto6";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F6 - Desabilitar Empresa</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/funcionalidades/f6.PNG alt=Lista de Empresas>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$(".btnF7").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto7";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F7 - Excluir Vaga</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f2.jpg alt=cachorro>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$(".btnF8").click(function(){
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto8";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F8 - Alteração de Dados da Empresa</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f2.jpg alt=cachorro>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$(".btnF9").click(function(){
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto9";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F9 - Alteração de Dados da Vaga</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f2.jpg alt=cachorro>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$(".btnF10").click(function(){
  
  var texto = "Conteudo explicando a funcionalidade do F2."+
  "O texto continua aqui. " + "Concatendo texto10";
  
  $('#modal-um .modal-header .modal-title').html("<h2>F10 - FeedBack</h2>");
  $('#modal-um .modal-body p').html(texto);
  $('#modal-um .modal-body img').replaceWith("<img src=img/f2.jpg alt=cachorro>");
  $('#modal-um .modal-footer').html("<a href=#>Link </a>")
  $('#modal-um').fadeIn('slow');
});

$('.modal-header_close').click(function(){
  
  $('#modal-um').fadeOut('slow');
});

}