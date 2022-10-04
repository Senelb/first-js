
 console.log("dışardan merhaba")   
function sayHello() {
 console.log("içerden merhaba")   
 
 console.log("aşağıdan merhaba")   
}
sayHello();
const userName="Ahmet";
let a=5;
let b=6;
function calc() {
    console.log(a+b);
}
calc();
let name1="mehmet"
function nameUpper(isim) {
    console.log(name1.toUpperCase())

}
nameUpper("abuzer")
nameUpper(name1)

function calculate(param1 , param2) {
    console.log(param1+param2);
    let number =(param1*2)
    console.log("ilki kadar",number)
}
calculate(15,91);
let var1=8;
let var2=6;

function calculate2() {
   let number=var1 * 3;
    console.log(var1+var2);
 
    console.log("ilki kadar",number)
}
calculate2(15,91);
function SayName(parametre) {
let cumle =`${parametre} benim adım`;
return cumle;    
}
console.log(SayName("rustem"));
function basit() {
    return 5;

} console.log("merhaba")
function kedi(mama) {
    return mama
}
console.log(kedi(6))
let yenideger=kedi(6)+7
let yepyenideger = yenideger*5
console.log(yepyenideger)

const bayBey=function (isim) {
const ger ="hello"  +isim; 
return ger;
}
console.log(bayBey("senel"));

function merhaba(params) {
    document.write(`<p>Merhaba${params}</p>`)
}
merhaba("ayşe");
let myage=prompt("yaşınızı giriniz");
console.log(myage);
function writemyage(params) {
    document.write(`<p>senin yaşın${params}</p>`)
}
writemyage(myage)

let soyAdım=prompt("isminizi giriniz")
let yasin=prompt("yaşınızı giriniz")
function exemple(value1,value2) {
  let firsYear=2*10.5;
  let lastYear=(value2-2)*4 
  let totalYears=firsYear +lastYear;
  document.write(`<h4>${value1} senin köpek yaşın ${totalYears}</h4>`)
}
//exemple ("mustafa",55);
exemple(soyAdım,yasin);