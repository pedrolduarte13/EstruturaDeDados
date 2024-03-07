//  ESTRUTURA DE DADOS

var num = 2;

if (num === 1) {
    console.log('num é igual a 1');
} else {
    console.log('Num não é igual a 1, o valor de num é:' + num);
}

// a instrução if..else pdoe ser representada por um "operador ternário" exemplos:

if (num === 1) {
    num--;
} else {
    num++
}

// Ou assim

(num === 1) ? num-- : num++;

// Podemos executar o if..else de maneiros distintas

var month = 22;

if (month === 1) {

    console.log('Janeiro');
} else if (month === 2) {

    console.log('Fevereiro');
} else if (month === 3) {

    console.log('Março');
} else if (month === 4) {

    console.log('Abril');
} else if (month === 5) {

    console.log('Maio');
} else if (month === 6) {

    console.log('Junho');
} else if (month === 7) {

    console.log('Julho');
} else if (month === 8) {

    console.log('Agosto');
} else if (month === 9) {

    console.log('Setembro');
} else if (month === 10) {

    console.log('Outubro');
} else if (month === 11) {

    console.log('Novembro');
} else if (month === 12) {

    console.log('Dezembro');
} else {

    console.log('Mês invalido');
};

/* Se a cibdulçai que estivermos avaliando for a mesma que a anterior podemos usar a instrução switch

- case: verifica se o valor é igual (==) da variavel switch entre parênteses

- break: interrompe a sequência;

- default: executa por padrão, caso nenhum opção case seja true.

default faz o mesmo passo que o ultimo else no ultimo codigo. */

var month = 6;

switch(month) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
        break;
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
        console.log('Mês invalido')
        break;
};





