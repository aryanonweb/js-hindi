const name="Aryan"
const repoCount= 50

//this syntax is outdated
//console.log(name + repoCount+ "Value");

// new syntax 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName= new String('Aryan-hai-mast')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString=gameName.substring(0,3)
//console.log(newString);

const anotherString=gameName.slice(-5,5)
// console.log(anotherString);

const newStringOne = "  Aryan   "
// console.log(newStringOne.trim());

const url= "https://aryan.com/aryan%20singh"

// console.log(url.replace('%20', '-'))
// console.log(url.includes('sundar'));
console.log(gameName.split('-'));