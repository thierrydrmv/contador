let valorAtual = 0;

function mais() {
    valorAtual++
    contador()
}

function menos() {
    valorAtual--
    contador()
}
function zerar() {
    valorAtual = -1
    contador()
}

function reset() {
    valorAtual = 0
    contador()
}

function contador() {
    const p = document.querySelector("#contador")
    p.innerText = valorAtual
    if (valorAtual<=-1) {
        document.getElementById('error').style.display = "block";
        zerar()
    }
    else
    document.getElementById('error').style.display = "none";
}


contador()