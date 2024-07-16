let hobbies: string[]; // Array of strings

hobbies = ['Sports', 'Cooking', 'Reading'];

type calc = (a: number, b: number) => number;

interface calcInterface {
    (a: number, b: number): number;
}

function calculate(a: number, b: number, calc: calcInterface) {
    calc(a, b);
}



console.log(calculate(2, 4, (a, b) => a * b))


class Gok {
    name: string;
    age: number;

    constructor({ name, age }: { name: string, age: number }) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }


}

const gok = new Gok({ age: 23, name: 'Gokul' });
gok.greet();

type DataStorage<T> = {
    storage: T[],
    addItem: (item: T) => void,
}


const textStorage: DataStorage<string> = {
    storage: ['Hello', 'World'],
    addItem(item: string) {
        this.storage.push(item);
    }
}

textStorage.addItem('Gokul');
console.log(textStorage.storage);

