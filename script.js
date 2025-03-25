
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