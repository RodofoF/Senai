// $(document).ready(function() {
//     $("#barsMenu").click(function() {

//         if($("#linksMenu").hasClass("menuAtivo")) {
//             $("#linksMenu").removeClass("menuAtivo");
//         } else {
//             $("#linksMenu").addClass("menuAtivo");
//         }

//     })
// })

//TODO:    Não consegui criar o menu de barras usando o Jquery

//     $("#barsMenu").click(function() {

//         $('#hiddenMenu').toggleClass('hidden-menu');
//     })
// })

$(document).ready(function() {
   
   let slideAtual = 1;

   let listaSlides = ["banner-pc", "banner-dia", "banner-pcGamer2"]

   setInterval(mudarSlides, 1000);

   function mudarSlides() {
       // Remove o slide anterior
        if(slideAtual > 0 ){
            $("#carroselBanner").removeClass(listaSlides[slideAtual-1]);
        } else if(slideAtual == 0) {
            $("#carroselBanner").removeClass(listaSlides[(listaSlides.length) - 1]);
        }
        // Adiciona o slide atual
        $("#carroselBanner").addClass(listaSlides[slideAtual]);

        slideAtual++;

        if(slideAtual > ((listaSlides.length) - 1)){
            slideAtual = 0
        }
   }
});

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