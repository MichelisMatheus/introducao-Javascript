//Aula 01
//Variáveis
var nome = "Matheus Michelis";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
var n1 = 5;
var n2 = 7;

/*
Comentário de multiplas linhas
*/

//Scripts - ALerts
/*
alert("Meu primeiro JS");
alert("Bem vindo " + nome);
alert(nome + " tem " + idade + " anos");
alert(idade + idade2);
*/

//Scripts - Console
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.replace("Japão", "Brasil").toUpperCase());
console.log(frase.replace("Japão", "Brasil").toLowerCase());
console.log(n1 * n2);

/* ------------------------------------------------------------------------------------------------------------------------------ */

//Aula 02
//Variáveis
var lista = ["Maçã", "Pêra", "Laranja"]; //Cria uma array
var fruta = {nome: "Maçã", cor: "Vermelha"}; //Cria um dicionário
var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome:"Laranja", cor: "Laranja"}, {nome: "Pêra", cor: "Verde"}]; //Cria uma lista de dicionários

//Script
console.log(lista); //Mostra a array no console
console.log(lista[1]);
lista.push("Uva"); //Adicionar um elemento no final da lista
console.log(lista);
lista.pop(); //Remover o último elemento da lista
console.log(lista);
console.log(lista.length); //Mostra o número de elementos da lista
console.log(lista.reverse()); //Traz os elementos da lista na ordem inversa 
console.log(lista.toString()); //Converte a array para uma string
console.log(lista[0]); //Imprime o primeiro elemento da lista
console.log(lista.toLocaleString()[0]); //Imprime a primeira letra da string
console.log(lista.join(" | ")); //Transforma a array em uma string e separa os elementos de acordo com o desejado
console.log(fruta); //Imprime no console o elemento
console.log(fruta.nome); //Imprime o atributo "nome" da variável "fruta"
console.log(frutas[0].nome); //Imprime o elemento "nome" do primeiro elemento da array "frutas"

/* ------------------------------------------------------------------------------------------------------------------------------ */