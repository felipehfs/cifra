"use strict";
// Criptografia de substituição utilizado por Júlio César no império romano.
// Feito por Felipe Henrique
// © 2018 Copyright - Felipe Henrique - All rights reserved 
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

/* Formação de toda frase criptografada */
CifraDeCesar.prototype.encript = function() {
	let wordEncripted = "";	
	let sinais = ".!?;, "

	/* A função converter faz a Criptografia de letra por letra */
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

let message = new CifraDeCesar("Mundo", 3).encript();
console.log(message);
