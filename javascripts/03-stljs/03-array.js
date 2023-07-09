// Array

{
    // Array Loop

    // forEach
    const array = ["Pocky", "Poem", "Cinderace"];

    // with anonymous function
    array.forEach(function (value, index) {
        console.info(`${index} : ${value}`);
    })

    // with arrow function
    array.forEach((value, index) => console.info(`${index} : ${value}`));

    array.forEach(value => console.info(value))

}


{
    // Array Queue

    const queue = [];

    queue.push("Vano");
    queue.push("Setiadi");
    queue.push("Brian");

    console.info(queue);

    console.info(queue.shift()); // Vano
    console.info(queue.shift()); // Setiadi
    console.info(queue.shift()); // Brian
    console.info(queue.shift()); // undefined (sudah tak ada data lagi)

    console.info(queue);
}


{
    // Array Stack
    const stack = [];

    stack.push("Jerome");
    stack.push("Polin");
    stack.push("Sijabat");

    console.info(stack.pop()); // Sijabat
    console.info(stack.pop()); // Polin
    console.info(stack.pop()); // Jerome
}


{
    // Array Search

    const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

    console.info(source.find(value => value > 3)) // 4
    console.info(source.findIndex(value => value > 3)) // 3
    console.info(source.includes(7)) // false
    console.info(source.includes(5)) // true
    console.info(source.indexOf(5)) // 4
    console.info(source.lastIndexOf(5)) // 9
}


{
    // Array Filter
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const ganjil = numbers.filter(value => value % 2 === 1);
    const genap = numbers.filter(value => value % 2 === 0);

    console.info(numbers);
    console.info(ganjil);
    console.info(genap);
}


{
    // Array Transform
    const names = "Jovan Herman Vincent".split(" ");
    console.info(names);
    console.info(names.map(value => value.toUpperCase())); // ['JOVAN', 'HERMAN', 'VINCENT']

    const namesReduce = names.reduce((before, value) => before + " " + value);
    console.info(namesReduce); // Jovan Herman Vincent

    const namesReduceRight = names.reduceRight((before, value) => before + "--" + value);
    console.info(namesReduceRight); // Vincent--Herman--Jovan
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.info(numbers.reduce((result, value) => result + value)); // 55
    console.info(numbers.reduceRight((result, value) => result + value)); // 55
}