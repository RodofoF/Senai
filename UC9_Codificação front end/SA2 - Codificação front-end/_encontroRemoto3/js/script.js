function mostrarMenu() {
    let hiddenMenu = document.getElementById("hiddenMenu")

    if (getComputedStyle(hiddenMenu).display == 'none') {
        hiddenMenu.style.display = 'flex'
    } else {
        hiddenMenu.style.display = 'none'
    }   
    
}

function cadastrarEmail(){
    let email = document.getElementById("campo-email").value

    alert(`O ${email} foi cadastrado com sucesso!`)

}