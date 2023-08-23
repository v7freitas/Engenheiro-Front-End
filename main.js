const form = document.getElementById('formulario')
const nomes = []
const numeros = []
let lista = ''
const cadastroSalvo = '<img src = "./images/Green-Checklist-PNG-Image.png" alt = "Emoji checklist" />'
const nomeContato = document.getElementById('nome')
const numeroContato = Number(document.getElementById('numero'))

function adicionaLinha(){
    

    if(nomes.includes(nomeContato.value)){
        alert(`Já existe alguém com o nome ${nomeContato.value}, por favor cadastre um nome diferente.`)
    } else{
        nomes.push(nomeContato.value)
        numeros.push(numeroContato.value)

        let linha = '<tr>'
        linha += `<td> ${nomeContato.value} </td>`
        linha += `<td> ${numeroContato.value} </td>`
        linha += `<td> ${cadastroSalvo} </td>`
        linha += '</tr>'

        lista += linha

    }

    nomeContato.value = ''
    numeroContato.value = ''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')

    corpoTabela.innerHTML = lista
}

form.addEventListener('submit', function(e){
    e.preventDefault()


    function adicionaLinha()
    function atualizaTabela()
})

