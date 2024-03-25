let frutas = []
let laticinios = []
let doces = []
let congelados = []
let resposta = "sim"
while (resposta == "sim") {
    let item = prompt("Qual item você quer guardar na lista")
    let categoria = prompt("Qual categoria você quer incluir na lista")
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

    resposta = prompt("deseja adicionar outro item")
}

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



