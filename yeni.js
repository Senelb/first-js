console.log("merhaba")
console.log("2+2")
//alert ("iyi bak hata varmı")
console.log("mehaba","dünya","nasılsın");
var firstname="melih";
let lastname="bilgemen";
const age =14;
console.log(firstname,lastname,14);

let Memleketi="samsun"
console.log(Memleketi);
console.log(age+6);
let fil="senel";
console.log(fil.length)
console.log("firstname");
console.log(Memleketi);
console.log(age)
console.log(lastname[5])
let metin="Why do we use it?"
console.log(metin[metin.length-1])
let nam="kediler tatlıdır"
console.log(nam.toLowerCase())
console.log(nam.toUpperCase())
console.log(nam.substring(3))
console.log(nam.substring(0,3))
console.log(nam.split(" "))
console.log(nam.trim())
console.log(nam.includes("i"))
console.log(nam.charAt())
let yeni ="yeni"+"dünya"
let isim="merhaba"
let ilkKarakter = isim.charAt(0).toUpperCase()
let sonrakiler=isim.substring(1)
console.log(sonrakiler)
console.log()
//alert ("selam")
let b = 5;
let a = 10;
console.log(a+b);
console.log(a*b)
let piNumber= (Math.PI);
console.log(piNumber);
console.log(Math.round(piNumber))
console.log(Math.floor(piNumber))
console.log(Math.ceil(piNumber))
let randumNumber =Math.random();
console.log(randumNumber *100)
console.log(randumNumber *100)
console.log(Math.floor(randumNumber * 100)+1)
console.log(Math.ceil(randumNumber * 47)+1)
console.log(Math.floor(randumNumber * 60)+1)
let x= 18
let y= 6
console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log((x+y)*y)
console.log(++x)
console.log(--x)
console.log(x%y)
let net=15
console.log(net)
net=net +5
console.log(net)
net -=12
console.log(net)
console.log(x==y)
console.log(x!==y)//eşit değilmi
console.log(net)
console.log(x==y)
console.log(x===y)//tip ve değer olarak aynı olması gerekiyor
let m="alma"
let n=("elma")
console.log(m==n)
console.log(m===n)
console.log(m!==n)
let num1 =9;
let num2 =11;
console.log(num1 >num2);
console.log(num1 <num2);
console.log(num1 >=num2);
console.log(num1 <=num2);
console.log(true && true)
console.log(false && true)
console.log(false && false)
console.log((num2 < 15)|| (num1 ===11))
let isBig = num1 > 4 ? "evet büyük" : "yok ya"
console.log(isBig)
let newd=null
num1 > 18 ? newd=15 : newd=25
console.log(newd)
let raining=true
if (raining) 
{ console.log("şemsiyeni al")}
let c=17;
let d=15;
let f=12
if (c>d && d===f) {
    console.log (`${c} ${d}'den büyütür`)
}else {
    console.log(`${c} ${d}'den küçüktür`)
}
if(a>18){
    console.log("dısarı çıkabilir")
}else{
    console.log("dısarı çıkamaz")
}
if(a>12 && a <18){
    console.log("dısarı çık,uzaklaşma")
}else if(a>=18){
    console.log("kedilere mama ver")
}else {
    console.log("evde otur");
}
let j = 0
if (j>0) {
    j--
} else {
    j++
}
console.log(j)
let weekDay =prompt("günü giriniz").toLowerCase();
if (weekDay=== "monday"){
  //  console.log(`bugün günlerden${weekDay},yemek menüsü corba pilav`)
}switch (weekDay) {
    case "monday":
        console.log(`bugün günlerden${weekDay},yemek menüsü corba makarna`) 
        break;
    case "tuesday":
        console.log(`bugün günlerden${weekDay},yemek menüsü corba makarna`) 
        break;
    case "wednesday":
        console.log(`bugün günlerden${weekDay},yemek menüsü corbamak`) 
        break;
    case "tursday":
        console.log(`bugün günlerden${weekDay},yemek menüsü  makararina`) 
        break;
    case "friday":
        console.log(`bugün günlerden${weekDay},yemek menüsü corba `) 
        break;

    default:
        console.log("bugün haftasonu")
        break;
}
let g=8
let h=6
switch (g>h) {
    case true:
        console.log("g h'den büyük");
        
        break;

    default:
        console.log("g h'den küçüktür");
        break;
}
switch (true) {
    case g>h:
        console.log("g h'den büyük");  
        
        break;
        case  g < h:
        console.log("hayır n büyüktür");   
        
        default:
        console.log("yok valla eşitler");   
        break;
}
let İsNight =true
if (İsNight){
    console.log("dişlerini fırçala")
} else{
    console.log("hemen yat");
}
İsNight ? console.log("dişlerini fırçala") : console.log("hemen yat");
let time =20
let mesaj=""
time>=17 ? mesaj="mesai bitti":time>=12 && time <13 ? mesaj="öğle arası":time <8 ? mesaj="mesai baslamadı" :  mesaj="mesai devam"
console.log(mesaj)
let mesaj2=time> 8 ?"mesai başladı":"mesai başlamadı"
