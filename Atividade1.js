class Aluno {
    constructor(nome, nota, matriculaAtiva = true) {
        this.nome = nome;
        this.nota = nota;
        this.matriculaAtiva = matriculaAtiva;
    }

    get status() {
        return this.matriculaAtiva ? 'A' : 'I';
    }
}

class ConjuntoDeAlunos {
    constructor(limite = 40) {
        this.itens = {};
        this.limite = limite;
    }

    adicionar(aluno) {
        if (this.tamanho() < this.limite) {
            if (!this.contem(aluno.nome)) {
                this.itens[aluno.nome] = aluno;
                this.imprimirLista();
                console.log(`${aluno.nome} adicionado na lista.\n`);
                return true;
            }
            return false; // Aluno já existe
        }
        return false; // Limite atingido
    }

    excluir(nome) {
        if (this.contem(nome)) {
            delete this.itens[nome];
            this.imprimirLista();
            console.log(`${nome} removido da lista.\n`);
            return true;
        }
        return false;
    }

    contem(nome) {
        return Object.prototype.hasOwnProperty.call(this.itens, nome);
    }

    limpar() {
        this.itens = {};
    }

    tamanho() {
        return Object.keys(this.itens).length;
    }

    valores() {
        return Object.values(this.itens);
    }

    ordenarPorNotaDescrescente() {
        return this.valores().sort((a, b) => b.nota - a.nota);
    }

    alunosAtivos() {
        return this.valores().filter(aluno => aluno.matriculaAtiva);
    }

    totalDeAlunos() {
        return this.tamanho();
    }

    totalDeAlunosAtivos() {
        return this.alunosAtivos().length;
    }

    imprimirLista() {
        const listaOrdenada = this.ordenarPorNotaDescrescente();
        console.log(`Pos Aluno          Nota  Status`);
        console.log(`--- -------------- ----- ------`);
        listaOrdenada.forEach((aluno, index) => {
            console.log(`${index + 1} ${aluno.nome.padEnd(14)} ${aluno.nota.toFixed(1)} ${aluno.status}`);
        });
        console.log(``);
    }
}

// Demonstrando a utilização das funções implementadas

const conjuntoDeAlunos = new ConjuntoDeAlunos();

console.log("Adicionando alunos:");
conjuntoDeAlunos.adicionar(new Aluno("Maria", 7.8));
conjuntoDeAlunos.adicionar(new Aluno("João", 9.2));
conjuntoDeAlunos.adicionar(new Aluno("Carla", 8.5, false));

console.log("Maria removida da posição 1.");
conjuntoDeAlunos.excluir("Maria");

conjuntoDeAlunos.adicionar(new Aluno("Ana", 9.5));
console.log("Ana adicionada na posição 1.");

conjuntoDeAlunos.adicionar(new Aluno("Carlos", 8.3));
console.log("Carlos adicionado na posição 2.");

conjuntoDeAlunos.adicionar(new Aluno("Fernanda", 6.7));
console.log("Fernanda adicionada na posição 5.");
