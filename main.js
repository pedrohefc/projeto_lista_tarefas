$(document).ready(function(){
    $('button').on('click', function(e){
        e.preventDefault()

        const tarefatext = $('input').val()

        if (tarefatext != ''){
            $('#lista-tarefa').append('<li></span>' + `${tarefatext}` + '</li>')
        } else {
            alert('Não é possível adicionar uma tarefa em branco!!')
        }
        $('input').val('')

    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('completed')
    })
})
