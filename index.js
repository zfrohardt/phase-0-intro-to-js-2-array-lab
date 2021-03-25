// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function appendCat(name) {
    return [...cats.slice(0, cats.length), name];
}

function prependCat(name) {
    return [name, ...cats.slice(0, cats.length)];
}

function removeFirstCat() {
    return cats.slice(1);
}

function removeLastCat() {
    return cats.slice(0, -1);
}