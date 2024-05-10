class Set {
    constructor() {
        this.items = {};
    }

    add(element) { // Adiciona um novo elemento ao conjunto.
        if (!this.has(element)) {
            this.items[element] = element;
            return true;
        }
        return false;
    }

    delete(element) { //Remove element do conjunto
        if (this.has(element)) {
            delete this.items[element];
            return true;    
        }
        return false;
    }

    has(element) {
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    clear() { // remove
        this.items = {};
    }  

    size() { // Devolve quantos elementos estão contidos no conjunto
        return Object.keys(this.items).length;
    }

    values() {
        return Object.values(this.items);
    }
}

const set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
set.add(2);
console.log(set);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());
console.log(set.delete(1));
console.log(set.values());
console.log(set.delete(2));
console.log(set.values());
