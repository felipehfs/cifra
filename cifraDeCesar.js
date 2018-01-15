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

/* Formação da palavra criptografada */
CifraDeCesar.prototype.build = function() {
	let wordEncripted = "";	
	let sinais = ".!?;, "

	function converter(letter, jump) {
		letter = letter.toLowerCase();
		const letters = "abcdefghijklmnopqrstuvwyxzãéíêçêâ";
		let index = letters.indexOf(letter) + jump;
		if (index >= letters.length) {
			index = Math.abs(letters.length - index); 
		}
		return letters.slice(index, index + 1);
	}

	for(let char of this.word){
		if (sinais.includes(char)) {
			wordEncripted += char;
		} else {
			wordEncripted += converter(char, this.jump);
		}
	} 
	return wordEncripted;
}

let c = new CifraDeCesar("Vamos ver se vai funcionar o espaço, senão a coisa vai ficar perdida...", 3);
console.log(c.build());
