let frutas = []
let laticinios = []
let doces = []
let congelados = []
let resposta = "sim"
let resposta1 = prompt("Deseja adicionar um item a lista?")

if (resposta1 == "sim") {
    while (resposta1 == "sim") {

        let item = prompt("Qual item você quer guardar na lista?")
        let categoria = prompt("Qual categoria você quer incluir na lista?")
        if (categoria == "frutas") {
            frutas.push(item)
        }
        if (categoria == "laticinios") {
            laticinios.push(item)
        }
        if (categoria == "doces") {
            doces.push(item)
        }
        if (categoria == "congelados") {
            congelados.push(item)
        }

        resposta1 = prompt("deseja adicionar outro item?")
    }
}

function lista (){ 
    frutas.forEach((valor) => {
        console.log(" frutas: ")
        console.log(valor)
    })
    
    laticinios.forEach((valor) => {
        console.log(" laticinios: ")
        console.log(valor)
    })
    doces.forEach((valor) => {
        console.log(" doces: ")
        console.log(valor)
    })
    
    congelados.forEach((valor) => {
        console.log(" congelados: ")    
        console.log(valor)
    })
    
}

let remocaoItem = prompt("Deseja remover algum item da lista?")
while (remocaoItem == "sim") {
    
    let categoriaRemove = prompt("Qual categoria você deseja remover o item? ")
    let itemRemove = prompt("Qual item dessa categoria você deseja remover?")
    if (categoriaRemove == "frutas") {
        let posicao = frutas.indexOf(itemRemove)
        frutas.splice(posicao, 1)
    }

    if (categoriaRemove == "laticinios") {
        let posicao = laticinios.indexOf(itemRemove)
        laticinios.splice(posicao, 1)
    }

    if (categoriaRemove == "doces") {
        let posicao = doces.indexOf(itemRemove)
        doces.splice(posicao, 1)
    }
    if (categoriaRemove == "congelados") {
        let posicao = congelados.indexOf(itemRemove)
        congelados.splice(posicao, 1)
    }
    remocaoItem = prompt("deseja remover outro item?")
}


lista () 

