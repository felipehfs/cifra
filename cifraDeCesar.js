"use strict";
// Criptografia de substituição utilizado por Júlio César no império romano.

/**
A classe CifraDeCesar tem como responsabilidade a encriptação da informação passada.
@constructor
@param {String} word - A frase ou palavra a ser encriptada
@param {Number} jump - Determina o salto de letras da cifra
*/
function CifraDeCesar(word, jump){
	this.word = word;
	this.jump = jump;
}

/* Encriptação das letras */
CifraDeCesar.prototype.converter = function(letter){
	letter = letter.toLowerCase();
	const letters = "abcdefghijklmnopqrstuvwyxzãéíêçêâ";
	let index = letters.indexOf(letter) + this.jump;
	if (index >= letters.length) {
		index = Math.abs(letters.length - index); 
	}
	return letters.slice(index, index + 1);
}

/* Formação da palavra criptografada */
CifraDeCesar.prototype.build = function() {
	let wordEncripted = "";	
	let sinais = ".!?;, "
	for(let char of this.word){
		if (sinais.includes(char)) {
			wordEncripted += char;
		} else {
			wordEncripted += this.converter(char);
		}
	} 
	return wordEncripted;
}

let c = new CifraDeCesar("Vamos ver se vai funcionar o espaço, senão a coisa vai ficar perdida...", 3);
console.log(c.build());
