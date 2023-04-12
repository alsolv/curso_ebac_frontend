$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

    const novaTarefa = $('#taskName').val();
    const novoItem = $('<li title="1 Clique conclui a Tarefa, 2 Cliques Exclui">x</li>');

    $(`<li>${novaTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");     

    $("#taskName").val('');

});

    $(".itens").on("click", "li", function(){
    $(this).addClass("tarefa-concluida");

    $("li").dblclick(function(){
        $(this).hide();
});
});
});
