document.addEventListener('DOMContentLoaded', function() { 
    // Adicionando um evento de clique ao botão de busca
    const searchButton = document.querySelector('.btn-outline-success');
    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Impedindo o comportamento padrão do botão
        const searchTerm = document.querySelector('.form-control').value; // Obtendo o termo de busca
        alert('Você está buscando por: ' + searchTerm); // Exibindo um alerta com o termo de busca
    });

    // Função para criar e adicionar uma mensagem dinâmica
    function adicionarMensagem() {
        // Cria um elemento de parágrafo
        var mensagem = document.createElement("p");
        // Define o texto da mensagem
        mensagem.textContent = "Bem-vindo à página de Planos de Coworking!";
        // Obtém o elemento onde a mensagem será adicionada
        var header = document.querySelector(".pricing-header");
        // Adiciona a mensagem como filho do elemento header
        header.appendChild(mensagem);
    }

    // Chama a função adicionarMensagem quando o documento HTML estiver totalmente carregado
    adicionarMensagem();

    // Adicionando um evento de clique a todos os botões "Ver" nas cartas de imagens
    let verButtons = document.querySelectorAll('.card-body button');
    verButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aqui  pode adicionar a lógica para exibir a imagem em um modal, por exemplo
            console.log('Clicou no botão Ver!');
        });
    });

    // Adicionando um evento de envio ao formulário de contato
    let contactForm = document.querySelector('#contactFormModal form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Aqui pode adicionar a lógica para enviar o formulário via AJAX, por exemplo
        console.log('Formulário de contato enviado!');
    });
});
