// JavaScript File



function Funcionalidades(){
  
var obj = [{func:"F1", "descricao":'<a href="#" class="btnF1">Login</a>',"categoria":"Back e Front","ator":'Adm/Empresa'},
        {func:"F2", "descricao":'<a href="#" class="btnF2">Cadastro de Empresa</a>',"categoria":"Back e Front","ator":'Adm'},
        {func:"F3", "descricao":'<a href="#" class="btnF3">Cadastro de Vaga</a>',"categoria":"Back e Front","ator":'Empresa'},
        {func:"F4", "descricao":'<a href="#" class="btnF4">Filtro de Candidados</a>',"categoria":"Back e Front","ator":'Empresa'},
        {func:"F5", "descricao":'<a href="#" class="btnF5">Lista de Alunos</a>',"categoria":"Back e Front","ator":'Adm'},
        {func:"F6", "descricao":'<a href="#" class="btnF6">Lista de Empresas</a>',"categoria":"Back e Front","ator":'Adm'},
        {func:"F7", "descricao":'<a href="#" class="btnF7">Excluir Vaga</a>',"categoria":"Back e Front","ator":'Empresa'},
        {func:"F8", "descricao":'<a href="#" class="btnF8">Alterar Empresa</a>',"categoria":"Back e Front","ator":'Empresa'},
        {func:"F9", "descricao":'<a href="#" class="btnF9">Alterar Vaga</a>',"categoria":"Back e Front","ator":'Empresa'},
        {func:"F10", "descricao":'<a href="#" class="btnF10">Desabilitar vaga</a>',"categoria":"Back e Front","ator":'Empresa'},
        {func:"F11", "descricao":'<a href="#" class="btnF11">Desabilitar Empresa</a>',"categoria":"Back e Front","ator":'Adm'},
        {func:"F12", "descricao":'<a href="#" class="btnF12">FeedBack</a>',"categoria":"Back e Front","ator":'Empresa'}];
 
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

