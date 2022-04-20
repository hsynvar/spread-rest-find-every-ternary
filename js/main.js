// ternary operator 
const korpununveziyyeti = 'masin sururem'
korpununveziyyeti=='aciq'
?console.log('hal hazirda korpu isleyir')
:korpununveziyyeti=='temir'
?console.log('temir baglidir')
:console.log('agilli ol ilkin');
// ----- 
const topla =(a=3,b=3) =>{
    return a+b
}
console.log(topla);
// ------ 
const mehsullar=[
    {id:3, name:'kitab',qiymet:11},
    {id:1, name:'qelem',qiymet:15},
    {id:4, name:'vereq',qiymet:16},
    {id:2, name:'defter',qiymet:30}
]

// find ilk tapdigin getirir
console.log(mehsullar.find((mes)=>mes.qiymet>10))
console.log(mehsullar.every((mes)=>mes.qiymet<30))
// ----- 

// rest spread operatoru
var say1=[1,2,3]
var say1=[4,5,6]

var cem = say1.concat(say2)
console.log(cem)
// ya da ---
console.log(...say1,...say2)
// -------------------------
let person={
    ad:'Rena',
    yas:23,
    seher:'Baki'
}

function topla(a,b,c){
    return a+b+c
}

const reqemler =[1,3,5]
console.log(topla(...reqemler));