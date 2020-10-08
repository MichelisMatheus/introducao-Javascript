//Aula 01
//Variáveis
/*
var nome = "Matheus Michelis";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
var n1 = 5;
var n2 = 7;
*/

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
/*
console.log(nome);
console.log(idade + idade2);
console.log(frase);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.replace("Japão", "Brasil").toUpperCase());
console.log(frase.replace("Japão", "Brasil").toLowerCase());
console.log(n1 * n2);
*/

/* ------------------------------------------------------------------------------------------------------------------------------ */

//Aula 02
//Variáveis
/*
var lista = ["Maçã", "Pêra", "Laranja"]; //Cria uma array
var fruta = {nome: "Maçã", cor: "Vermelha"}; //Cria um dicionário
var frutas = [{nome: "Maçã", cor: "Vermelha"}, {nome:"Laranja", cor: "Laranja"}, {nome: "Pêra", cor: "Verde"}]; //Cria uma lista de dicionários
*/

//Script
/*
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
*/

/* ------------------------------------------------------------------------------------------------------------------------------ */

//Aula 03
//Variáveis
/*
var idade = 18;
var idade = prompt("Qual sua idade: ");
var count = 0;
var count2;
var d = new Date();
*/

//Scripts
/*if (idade >= 18) {
    alert("Maior de idade"); 
} else {
    alert("Menor de idade");
};

while (count <= 5){
    console.log(count);
    count++; //count = count + 1;
};

for(count2 = 0; count2 <= 5; count2++) {
    console.log(count2.toString());
};

console.log(d); //Imprime a data sem formatação
console.log(d.getDate()); //Imprime o dia
console.log(d.getMonth()+1); //Imprime o mês (o "+1" é pq elesempre começa pelo 0)
console.log(d.getMinutes()); //Imprime os minutos
console.log(d.getHours()); //Imprime as horas
*/

/* ------------------------------------------------------------------------------------------------------------------------------ */

//Aula 04
//Variáveis
/*
var m1;
var m2;

//Scripts
function soma(m1, m2) {
    return m1 + m2;
};

console.log("Resultado da soma de 5 + 10: " + soma(5, 10));

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
};

console.log(setReplace("Vai Japão", "Japão", "Brasil"));

function validarIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
};
var idade = prompt("Qual a sua idade?");
console.log(validarIdade(idade));
*/

/* ------------------------------------------------------------------------------------------------------------------------------ */

//Aula 05
//Variáveis


//Scripts
function clicou() {
    //alert ("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar() {
    //window.open("https://www.google.com.br/"); //abre um link em outra janela
    window.location.href = "https://www.google.com.br/"; //abre um link na mesma janela
}

function trocar(elemento) {
    document.getElementById("passe_o_mouse_aqui").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML = "Tira esse mouse de cima de mim!!!!!!!!!";
}

function voltar(elemento) {
    document.getElementById("passe_o_mouse_aqui").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Não passe o mouse aqui!";
}

function load() {
    alert("Página carregada");
}

function change(elemento) {
    console.log(elemento.value);
}