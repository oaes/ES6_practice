
//concat
const ages = [33,34,23,42,43]
const localAges = [33,23,53,2,42,3]
const addAll = [...ages,50,90,34,23,...localAges]
console.log(addAll)

const a =[890,4342];
const b=[900,422]
const c=[993,333]
const all=Math.max(...a,...b,...c);
console.log(all)