// Função para criptografar o texto
function crip() {
  // Obter a área de texto e o valor inserido pelo usuário
  let textArea = document.querySelector(".program__textArea");
  let text = textArea.value;

  // Elemento para exibir mensagens de erro
  let errorMessage = document.querySelector(".error-message");

  // Validar se o texto contém apenas letras minúsculas, espaços e pontuações (.,!?)
  if (!/^[a-z\s.,!?]+$/i.test(text) || /[A-ZÀ-ÚÂ-ÛÄ-Ü]/.test(text)) {
    errorMessage.textContent =
      "Por favor, digite apenas letras minúsculas, espaços e pontuações (.,!?)";
    return;
  }

  //Substituir letras por sequências específicas
  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/a/g, "ai");
  text = text.replace(/o/g, "ober");
  text = text.replace(/u/g, "ufat");

  // Converter o texto criptografado em uma lista de caracteres
  listaFrase = text.split("").map((letra) => {
    return letra;
  });

  exibirResultado();

  // Limpar mensagem de erro se não houver erro
  errorMessage.textContent = "";
}

// Função para descriptografar o texto
function descrip() {
  // Obter a área de texto e o valor inserido pelo usuário
  let textArea = document.querySelector(".program__textArea");
  let text = textArea.value;

  // Elemento para exibir mensagens de erro
  let errorMessage = document.querySelector(".error-message");

  // Validar se o texto contém apenas letras minúsculas, espaços e pontuações (.,!?)
  if (!/^[a-z\s.,!?]+$/i.test(text) || /[A-ZÀ-ÚÂ-ÛÄ-Ü]/.test(text)) {
    errorMessage.textContent =
      "Por favor, digite apenas letras minúsculas, espaços e pontuações (.,!?)";
    return;
  }

  // Substituir sequências específicas por letras originais
  text = text.replace(/enter/g, "e");
  text = text.replace(/imes/g, "i");
  text = text.replace(/ai/g, "a");
  text = text.replace(/ober/g, "o");
  text = text.replace(/ufat/g, "u");

  // Converter o texto descriptografado em uma lista de caracteres
  listaFrase = text.split("").map((letra) => {
    return letra;
  });

  exibirResultado();

  // Limpar mensagem de erro se não houver erro
  errorMessage.textContent = "";
}

// Função para exibir o resultado na seção relacionada à mensagem recebida
function exibirResultado() {
  // Obter elementos da seção que será utilizada para exibir os resultados
  let image = document.querySelector(".program__img");
  let h1 = document.querySelector(".program__rec__h1");
  let p = document.querySelector(".program__rec__p");
  let btn = document.querySelector(".program__rec__btn");
  let hiddenText = document.querySelector(".program__rec__pHidden");

  // Verificar se a lista de caracteres está vazia ou não possui informações suficientes
  if (listaFrase.length === 0) {
    // Configurar elementos quando não há mensagem
    image.src = "./assets/clipboard-text.svg";
    h1.textContent = "Nenhuma mensagem encontrada";
    hiddenText.textContent = "";
    p.textContent =
      "Digite um texto que você deseja criptografar ou descriptografar";
    btn.setAttribute("hidden", true);
  } else {
    // Configurar elementos quando há uma mensagem
    image.setAttribute("hidden", true);
    hiddenText.textContent = listaFrase.join("");
    p.textContent = "";
    h1.textContent = "";
    btn.removeAttribute("hidden");
    hiddenText.removeAttribute("hidden");
  }
}

// Função para copiar o texto descriptografado para a área de transferência
function copyText() {
  let textToCopy = document.querySelector(".program__rec__pHidden").textContent;

  if (textToCopy) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Texto copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Erro ao copiar texto: ", err);
      });
  }
}
