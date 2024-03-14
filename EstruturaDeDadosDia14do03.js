obj = {
    name: {
        first: "Pedro",
        last: "Lucas"
    },
    address: 'QSF 15 casa 13 - Tag Sul'
};

console.log(obj.address);

//

function Book (tittle, pages, isbn) {
    this.tittle = tittle;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Estrutura de Dados', 406, '976 85 7522 553 0');

console.log(book.tittle);
Book.tittle = 'Estrutura de Dados e Algoritmos com JavaScript'
console.log(book.tittle);
console.log('Este livro possui:  ', book.pages , '  páginas.');

//

function Book (tittle, pages, isbn) {
    this.tittle = tittle;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Estrutura de Dados', 406, '976 85 7522 553 0');

Book.prototype.printTitle = function() {
    console.log(this.tittle);
};

book.printTitle();

//

function Book (tittle, pages, isbn) {
    this.tittle = tittle;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function() {
        console.log('ISBN:  ' + this.isbn);
    }
}

var book = new Book('Estrutura de Dados', 406, '976 85 7522 553 0');

book.printIsbn();

// ARRAYS (Vetores unidimensionais e Matrizes bidimensionais e multidimensionais)

// Um array é a estrutura de dados mais simples possivel em uma memoria

// Um aaray armazena valores que são todos do mesmo tipo (homogêneo); sequencialmente (como uma lista de valores)

// Embora o JavaScript nos permita criar arrays com valores de tipso distintos.

const numbers = [1, 2, 3, [4, 5, 6,]];

console.log(numbers.length);

//

const 

