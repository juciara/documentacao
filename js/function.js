// JavaScript File



function Funcionalidades(){
  
var obj = [{func:"F1", "descricao":'<a href="#" class="btnF1">Login</a>'},
        {func:"F2", "descricao":'<a href="#" class="btnF2">Cadastro de Empresa</a>'},
        {func:"F3", "descricao":'<a href="#" class="btnF3">Cadastro de Vaga</a>'},
        {func:"F4", "descricao":'<a href="#" class="btnF4">Filtro de Candidados</a>'},
        {func:"F5", "descricao":'<a href="#" class="btnF5">Lista de Alunos</a>'},
        {func:"F6", "descricao":'<a href="#" class="btnF5">Lista de Empresas</a>'},
        {func:"F7", "descricao":'<a href="#" class="btnF7">Excluir Vaga</a>'},
        {func:"F8", "descricao":'<a href="#" class="btnF8">Alteração de Dados da Empresa</a>'},
        {func:"F9", "descricao":'<a href="#" class="btnF9">Alteração de Dados da Vaga</a>'},
        {func:"F10", "descricao":'<a href="#" class="btnF10">FeedBack</a>'},
        {func:"F11", "descricao":'<a href="#" class="btnF6">Desabilitar Empresa</a>'}];
 
var tabela = document.getElementById("tabela");

for (var i in obj){
    
    var tr = document.createElement("tr");
    var tdProduto = document.createElement("td");
    var tdPreco = document.createElement("td");
    var tbody = document.querySelector("tbody");
    
    tdProduto.innerHTML = obj[i].func;
    tdPreco.innerHTML = obj[i].descricao;
    tr.appendChild(tdProduto)
    tr.appendChild(tdPreco);
    tbody.appendChild(tr);
    tabela.appendChild(tbody);
}
    main();
}

