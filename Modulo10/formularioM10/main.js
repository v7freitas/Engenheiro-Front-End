$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {placeholder: '( __ ) _____-____'})

    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___ - __'
    })

    $('#cep').mask('00000-000', {placeholder: '_____-___'})

    $('form').validate({
        rules: {
            nome:{
                required: true
            }, 
            email:{
                required: true,
                email: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true
            }, 
            endereco:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids()
            if(camposInvalidos){
                alert(`Existem ${camposInvalidos} campos incorretos`)
            }
        } 
    })
}) 