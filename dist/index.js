"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Kupić kwiaty"),
    new todoItem_1.TodoItem(2, "Odebrać buty"),
    new todoItem_1.TodoItem(3, "Zamówić bilety"),
    new todoItem_1.TodoItem(4, "Zadzwonić do Janka", true)
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`Właściciel listy: ${collection.userName}`
    + `(liczba zadań pozostałych do zrobienia: ${collection.getItemCounts().incomplete})`);
// let newId: number = collection.addTodo("Iść pobiegać");
// let todoItem: TodoItem = collection.getTodoById(newId);
// todoItem.printDetails();
// collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
