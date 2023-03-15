let valor_cidade = []
let res = document.getElementById('res')

function array() {
    let cidade = document.getElementById('cidade').value
    valor_cidade.push(cidade)
    res.innerHTML = valor_cidade
}

function array2() {
    valor_cidade.pop(cidade)
    res.innerHTML = valor_cidade

}