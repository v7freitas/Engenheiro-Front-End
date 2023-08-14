function verificar(){
    let numA = document.getElementById('numA')
    let numB = document.getElementById('numB')
    let A = Number(numA.value)
    let B = Number(numB.value)
    let mensError = document.getElementById('msg')
    let mensSuccess = document.getElementById('msg')
    if(A > B){
        mensError.innerHTML = `${A} é maior do que ${B}, repita o processo!`
        mensError.style.display = 'block'
        mensSuccess.style.background = 'red'
    } else if(A == B){
        mensError.innerHTML = 'Valores iguais, verifique seus dados!'
        mensError.style.display = 'block'
        mensSuccess.style.background = 'red'
    } else{
        mensSuccess.innerHTML = `Muito bem! ${B} é maior do que ${A}! Seus dados foram registrados com sucesso!`
        mensSuccess.style.display = 'block'
        mensSuccess.style.background = '#27ae60'
    }


}

form.addEventListener('submit', function(e){
    e.preventDefault()
})