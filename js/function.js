// JavaScript File



function Funcionalidades(){
  
var obj = [{func:"F1", "descricao":'<a href="#" class="btnF1">Login</a>',"categoria":"back end","ator":'aluno'},
        {func:"F2", "descricao":'<a href="#" class="btnF2">Cadastro de Empresa</a>'},
        {func:"F3", "descricao":'<a href="#" class="btnF3">Cadastro de Vaga</a>'},
        {func:"F4", "descricao":'<a href="#" class="btnF4">Filtro de Candidados</a>'},
        {func:"F5", "descricao":'<a href="#" class="btnF5">Lista de Alunos</a>'},
        {func:"F6", "descricao":'<a href="#" class="btnF6">Lista de Empresas</a>'},
        {func:"F7", "descricao":'<a href="#" class="btnF7">Excluir Vaga</a>'},
        {func:"F8", "descricao":'<a href="#" class="btnF8">Alter Empresa</a>'},
        {func:"F9", "descricao":'<a href="#" class="btnF9">Alterar Vaga</a>'},
        {func:"F10", "descricao":'<a href="#" class="btnF10">Excluir vaga</a>'},
        {func:"F11", "descricao":'<a href="#" class="btnF11">Desabilitar Empresa</a>'},
        {func:"F12", "descricao":'<a href="#" class="btnF12">FeedBack</a>'}];
 
var tabela = document.getElementById("tabela");

for (var i in obj){
    
    var tr = document.createElement("tr");
    var tdFuncionalidade = document.createElement("td");
    var tdDescricao = document.createElement("td");
    var tdCategoria = document.createElement("td");
    var tdAtor = document.createElement("td");
    var tbody = document.querySelector("tbody");
    
    tdFuncionalidade.innerHTML = obj[i].func;
    tdDescricao.innerHTML = obj[i].descricao;
    tdCategoria.innerHTML = obj[i].categoria;
    tdAtor.innerHTML = obj[i].ator;
    tr.appendChild(tdFuncionalidade)
    tr.appendChild(tdDescricao);
    tr.appendChild(tdCategoria);
    tr.appendChild(tdAtor);
    tbody.appendChild(tr);
    tabela.appendChild(tbody);
}
    main();
}

