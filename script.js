$(document).ready(function() {
  $(".dinheiro").click(function() {
    let button = $(this);
    button.addClass("onclic"); // Adiciona a animação de carregamento

    setTimeout(function() {
      button.removeClass("onclic"); // Remove a animação de carregamento
      button.addClass("validate"); // Adiciona a validação de sucesso

      setTimeout(function() {
        button.removeClass("validate"); // Remove a validação após um tempo
      }, 1250);

    }, 2250);
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".dinheiro"); // Botão inicial

  button.addEventListener("click", function () {
      button.classList.add("onclic"); // Adiciona animação de carregamento

      setTimeout(() => {
          button.classList.remove("onclic"); // Remove animação de carregamento
          button.classList.add("validate"); // Adiciona animação final
          
          // Criar um link temporário para baixar o arquivo
          const link = document.createElement("a");
          link.href = "fotos/Adriana.png"; // Substitua pelo caminho do seu arquivo
          link.download = "meu_arquivo.pdf"; // Nome do arquivo baixado
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

      }, 15000); // Tempo da animação antes do download (ajuste conforme necessário)
  });
});
