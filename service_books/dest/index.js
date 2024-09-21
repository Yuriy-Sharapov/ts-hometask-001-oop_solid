"use strict";
// подключаем генератор гуидов UUID
var uuid = require('uuid').v4;
var cBook = /** @class */ (function () {
    function cBook(title, description, authors, favorite, fileCover, fileName, fileBook, id) {
        if (id === void 0) { id = uuid(); }
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
    return cBook;
}());
module.exports = cBook;
var books = require('../storage/storage2.ts').books;
var BooksRepository = /** @class */ (function () {
    function BooksRepository() {
    }
    // создание книги
    BooksRepository.prototype.createBook = function (book) {
        var idx = books.findIndex(function (el) { return el.id === book.id; });
        if (idx !== -1)
            return books[idx];
        books.push(book);
        return book;
    };
    // получение книги по id
    BooksRepository.prototype.getBook = function (id) {
        var idx = books.findIndex(function (el) { return el.id === id; });
        if (idx === -1)
            return null;
        return books[idx];
    };
    // получение всех книг
    BooksRepository.prototype.getBooks = function () {
        return books;
    };
    // обновление книги
    BooksRepository.prototype.updateBook = function (id, title, description, authors, favorite, fileCover, fileName, fileBook) {
        var idx = books.findIndex(function (el) { return el.id === id; });
        if (idx === -1)
            return null;
        books[idx].title = title;
        books[idx].description = description;
        books[idx].authors = authors;
        books[idx].favorite = favorite;
        books[idx].fileCover = fileCover;
        books[idx].fileName = fileName;
        books[idx].fileBook = fileBook;
        return books[idx];
    };
    //  удаление книги
    BooksRepository.prototype.deleteBook = function (id) {
        var idx = books.findIndex(function (el) { return el.id === id; });
        if (idx === -1)
            return null;
        var book = books[idx];
        books.splice(idx, 1);
        return book;
    };
    return BooksRepository;
}());
var clBook = require('../classes/cBook2');
// Инициализация базы книг
var storage = {
    books: [
        new clBook("The Twelve-Factor App (Русский перевод)", "Интересная книга", "", true, "public//books//TFA.html", "TFA.html", "public//books//TFA.html"),
        new clBook("Совершенный код", "Очень хорошая книга", "Макконнелл", true, "public//books//Макконнелл «Совершенный код».pdf", "Макконнелл «Совершенный код».pdf", "public//books//Макконнелл «Совершенный код».pdf"),
        new clBook("Простоквашино", "Отличная книга для детей", "Э. Успенский", true, "err/err/Простоквашино.pdf", "Простоквашино.pdf", "err/err/Простоквашино.pdf")
    ],
};
module.exports = storage;
