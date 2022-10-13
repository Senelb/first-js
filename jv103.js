function nam() {
  return 5  
}

console.log(nam())
let MyArray=['bir','iki','üç','dört']
let numArray=[1,2,3,4,5,6,7,8,9,]
let totalArray=[12,65,33,87,99,41,16]
function compare (params) {
    if (params>= 50) {
console.log(`${params} Elliden büyük`)
    }
}
compare()
for (let i = 0; i < numArray.length; i++) {
    const element = numArray[i];
    console.log(element)
}
function calculate(params) {
   for (let i = 0; i <params.length; i++) {
    const element = params[i];
    console.log(element)
   }
}    
    calculate(totalArray)
    calculate(MyArray)
