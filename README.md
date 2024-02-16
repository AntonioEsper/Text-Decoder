# Text Decoder

Este é um projeto de um decodificador de texto. Ele permite que os usuários insiram um texto e escolham criptografar ou descriptografar o texto. O resultado é exibido na tela e pode ser copiado para a área de transferência.

Preview do Projeto: https://antonioesper.github.io/Text-Decoder/

## Como usar

1. Digite o texto que deseja criptografar ou descriptografar na caixa de texto.
2. Clique no botão "Criptografar" para criptografar o texto ou no botão "Descriptografar" para descriptografar o texto.
3. O resultado será exibido na tela. Você pode clicar no botão "Copiar para a área de transferência" para copiar o resultado.

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript

## Mapa de transformação

O mapa de transformação usado para criptografar e descriptografar o texto é o seguinte:

```javascript
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
