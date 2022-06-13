let valorAtual = 0;

function mais() {
    valorAtual++
    contador()
}

function menos() {
    valorAtual--
    contador()
}
function reset() {
    valorAtual = 0
    contador()
}

function contador() {
    const p = document.querySelector("#contador")
    p.innerText = valorAtual
    if (valorAtual<0) {
        alert("Pare não é possível utilizar números negativos")
        reset()
    }
}

contador()