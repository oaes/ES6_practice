const give100 = num => num*5;
const result = give100(50);
console.log(result);

const full5 = add => add+100;
const result2 = full5(100);
console.log(result2)

const name = lock => lock-20;
const minus = name(100);
console.log(minus)

const doMath = (a,b) => {
    const sum = a+b;
    const minus = a-b;
    const multiple = sum * minus;
    return multiple;
}
const result3 = doMath(10,2)
console.log(result3);