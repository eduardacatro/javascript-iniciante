class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}

let book = new Book('Algoritmos para viver', 'Brian', 500);
let otherBook = new Book ('Um Exu em Nova York', 'Cidinha da Silva', 100); 

console.log(book, otherBook);

class ITBook extends Book {
    constructor(title, author, pages, tecnology){
        super(title, author, pages);
        this.tecnology = tecnology;
    }
}

let itbook = new ITBook ('Algoritmos para viver', 'Brian', 500, 'Algoritmos');
console.log(itbook);

class Person {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}

let person = new Person ('Eduarda');
person.name = 'Si';
console.log(person.name);





