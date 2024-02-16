document.addEventListener("DOMContentLoaded", function () {
  const transformationMap = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const transformationMapReverse = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const inputTextArea = document.getElementById('text_input');
  const outputTextArea = document.getElementById('output');
  const encodeButton = document.getElementById('cripto_button');
  const decodeButton = document.getElementById('decript_button');

  function encodeText(text) {
    let encodedText = text;
    for (let key in transformationMap) {
      const regex = new RegExp(key, 'g');
      encodedText = encodedText.replace(regex, transformationMap[key]);
    }
    return encodedText;
  }

  function decodeText(text) {
    let decodedText = text;
    for (let key in transformationMapReverse) {
      const regex = new RegExp(key, 'g');
      decodedText = decodedText.replace(regex, transformationMapReverse[key]);
    }
    return decodedText;
  }

  function createCopyButton() {
    const button = document.createElement('button');
    button.id = 'copy_button';
    button.textContent = 'Copiar para a área de transferência';
    button.addEventListener('click', function () {
      navigator.clipboard.writeText(outputTextArea.textContent)
        .then(() => {
          console.log('Texto copiado para a área de transferência');
        })
        .catch(err => {
          console.error('Erro ao copiar texto: ', err);
        });
    });
    return button;
  }

  encodeButton.addEventListener('click', function () {
    const inputText = inputTextArea.value;
    const encodedText = encodeText(inputText);
    outputTextArea.textContent = encodedText;
    outputTextArea.appendChild(createCopyButton());
  });

  decodeButton.addEventListener('click', function () {
    const inputText = inputTextArea.value;
    const decodedText = decodeText(inputText);
    outputTextArea.textContent = decodedText;
    outputTextArea.appendChild(createCopyButton());
  });
});

// dark mode
const darkModeToggle = document.getElementById('dark_mode');
darkModeToggle.addEventListener('click', function () {
  document.body.classList.toggle('dark');
});