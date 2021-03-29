import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Kupić kwiaty"),
    new TodoItem(2, "Odebrać buty"),
    new TodoItem(3, "Zamówić bilety"),
    new TodoItem(4, "Zadzwonić do Janka", true)
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.clear();
console.log(`Właściciel listy: ${collection.userName}` 
    + `(liczba zadań pozostałych do zrobienia: ${collection.getItemCounts().incomplete})`
    );

// let newId: number = collection.addTodo("Iść pobiegać");
// let todoItem: TodoItem = collection.getTodoById(newId);
// todoItem.printDetails();

// collection.removeComplete();

collection.getTodoItems(true).forEach(item => item.printDetails());