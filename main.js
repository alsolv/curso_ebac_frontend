$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

    const NovaTarefa = $('#taskName').val();
    const NovoItem = $('<li> </li>');

    $(`<li>${NovaTarefa}</li>`).appendTo(NovoItem);
    $(NovoItem).appendTo("ul");

    $("#taskName").val('');

});

    $(".itens").on("click", "li", function(){
    $(this).addClass("tarefaConcluida");
});
    $("li").on("click", "li", function(){
    $(this).removeClass("remove-tareda");
    

});
});
