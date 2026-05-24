/* MENU */

const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});


/* BOTÃO BACK TO TOP */

const backToTopElement = document.getElementById("back-to-top");

const handleBackToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

backToTopElement.addEventListener("click", handleBackToTop);

const elementToObserve = document.querySelector(".navbar");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

const handleBackToTopVisibility = (entries) => {

    entries.forEach((entry) => {

        if (!entry.isIntersecting){
            backToTopElement.classList.add("back-to-top-visible");
        } 
        
        else{
            backToTopElement.classList.remove("back-to-top-visible");
        }

    });

};

const observer = new IntersectionObserver(
    handleBackToTopVisibility,
    options
);

if(elementToObserve){
    observer.observe(elementToObserve);
}



// modal editar perfil
/* MODAL PERFIL */

const abrirModal = document.getElementById("abrirModal");
const modalEditar = document.getElementById("modalEditar");

const cancelarModal = document.getElementById("cancelarModal");

abrirModal.addEventListener("click", () => {
    modalEditar.classList.add("ativo");
});

cancelarModal.addEventListener("click", () => {
    modalEditar.classList.remove("ativo");
});


/* ATUALIZAR PERFIL */

const formPerfil = document.getElementById("formPerfil");

formPerfil.addEventListener("submit", (event) => {

    event.preventDefault();

    const nome = document.getElementById("editarNome").value;
    const email = document.getElementById("editarEmail").value;
    const telefone = document.getElementById("editarTelefone").value;

    if(nome){
        document.getElementById("perfilNome").textContent = nome;
    }

    if(email){

        const emailPerfil = document.getElementById("perfilEmail");

        emailPerfil.textContent = email;

        emailPerfil.href = `mailto:${email}`;
    }

    if(telefone){
        document.getElementById("perfilTelefone").textContent = telefone;
    }

    modalEditar.classList.remove("ativo");

});


/* TROCAR FOTO */

const inputFoto = document.getElementById("inputFoto");

inputFoto.addEventListener("change", () => {

    const arquivo = inputFoto.files[0];

    if(arquivo){

        const leitor = new FileReader();

        leitor.onload = (e) => {

            document.getElementById("fotoPerfil").src = e.target.result;

            document.getElementById("previewFoto").src = e.target.result;

        };

        leitor.readAsDataURL(arquivo);

    }

});
