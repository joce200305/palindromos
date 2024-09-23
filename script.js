const Palindromo = str => {
    let letras = '';
    for (let char of str) {
        if (char !== ' ') {
            letras += char.toLowerCase();
        }
    }

    for (let i = 0; i < letras.length / 2; i++) {
        if (letras.charAt(i) !== letras.charAt(letras.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

document.getElementById('checkButton').addEventListener('click', () => {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');
    const resultado = Palindromo(inputString);
    resultElement.textContent = resultado 
        ? `"${inputString}" es un palíndromo.` 
        : `"${inputString}" no es un palíndromo.`;
});
