class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    
    fix() {
        return this.state *= 1.5;
    }
    
    set state (state) {
        if (state < 0) {
            state = 0;
        } else if (state > 100) {
            state = 100;
        }

        this._state = state;
    }

    get state() {
        return this._state;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)      
        this.type = 'magazine';
    }
}
  
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) { 
        super (name, releaseDate, pagesCount)     
        this.type = 'book';
        this.author = author;
    }  
}
  
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);  
        this.type = 'novelBook';    
    }  
}
  
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) { 
        super (author, name, releaseDate, pagesCount);     
        this.type = 'fantasticBook';    
    }  
}
  
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) { 
        super (author, name, releaseDate, pagesCount);     
        this.type = 'detectiveBook';    
    }  
}


////////////////////////////////////////////////////////////////////////////////////////////////

class Library {
    constructor(name, books) {
        this.name = name;  //имя библиотеки
        this.books = []; //книги в библиотеке
        this.givenBooks = []; //отданные книги
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            //console.log(this.books)
        }        
    }

    findBookBy(type, value) { //ключ поискa (тип, автор, название, год выпуска и пр.) и искомое значение
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            } 
        } 
        return null;       
    }

    giveBookByName(bookName) { //название книги, запрошенной читателем
        let targetBook;
        let targetBooksAuthor;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
                targetBook = this.books[i].name; 
                targetBooksAuthor = this.books[i].author;
                this.givenBooks.push(this.books.splice(i,1)[0]);              
                return console.log(`К выдаче - книга "${targetBook}" - ${targetBooksAuthor}`);
            } 
        } 
        return null;       
    }

    backBookByName(bookName) { //название возвращаемой книги
        let backingBook;        
        for (let i = 0; i < this.givenBooks.length; i++) {
            if (this.givenBooks[i].name == bookName) {
                backingBook = this.givenBooks.splice(i,1)[0];
                this.books.push(backingBook);              
                return console.log(`Возвращается книга "${this.books[this.books.length - 1].name}".`);
            } 
        }               
    }


}


/**
 * @todo если отданных книг много, найти возвращаемую и проводить манипуляции с ней
 * @todo третье задание
 */
////////////////////////////////////////////////////////////////////////////////////////////////////

const library = new Library("Маяковка");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Этюд в багровых тонах", 1996, 899));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Понедельник начинается в субботу", 1892, 368));
library.addBook(new FantasticBook("Супер-автор", "Какая-то книга", 1919, 500));
library.addBook(new Magazine("CG", 2020, 120));

//console.log(library); //проверка

console.log(library.findBookBy("releaseDate", 1919).name);

library.giveBookByName("Какая-то книга");


//console.log(library); //проверка
library.givenBooks[0]._state = 50 //отданная книга треплется
//console.log(library.givenBooks[0]._state); //проверка
library.givenBooks[0].fix() // чиним эту книгу
//console.log(library.givenBooks[0]._state); //проверка

library.backBookByName("Какая-то книга"); //возвращаем в библиотеку
//console.log(library); //проверка

