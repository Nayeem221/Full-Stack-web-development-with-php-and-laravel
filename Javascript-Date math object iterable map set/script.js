// const currentdateandtime=new  Date()
// console.log(currentdateandtime);


// const month=currentdateandtime.getMonth()
// const year=currentdateandtime.getFullYear()
// const hour=currentdateandtime.getHours()
// const min=currentdateandtime.getMinutes()
// const second=currentdateandtime.getSeconds()
// console.log(date,month,year,hour,min,second);

// const specificdate=new Date("2023-05-10")
// const date=specificdate.getDate()
// console.log(specificdate);

// let datefromdate=new Date(499393388888)
// console.log(datefromdate);

// let x=Math.random()*50

// console.log(Math.round(x));        //to make round figure not 53.4343 like that
// let x=-323
// let y=Math.abs(x)         //to make positive value negative
// console.log(y);
// let x=23
// if(x<0) 
// x=x*-1
// console.log(x);
// x=323.233

// console.log(Math.ceil(x)); //round-0.5 lower for example 43.67 it will  be 44 if 43.45 it will take 43  ceil-will take upper value on the otherhand floor will take lower value
// const a=[1221,343,3445,454233,434]
// const s= new Set(a)
// console.log(s7);
// let x=[12,34,323,23,24,2,324,4323,]
// let max=x[0]
// let min=x[0]
// for(let i=0;i<x.length;i++){
//     if (x[i]>max) {
//         max=x[i]
//     }if(x[i]<min){
//         min=x[i]
//     }
// }
// console.log(`maximum:${max} minimum:${min}`);


// const array = [1, 2,2, 3, 3, 3, 4, 4, 4,4,5,5,5,5,5,6,6,];
// const frequencyMap = new Map();
// array.forEach((element)=>{
// if(frequencyMap.has(element)){
//     frequencyMap.set(element,frequencyMap.get(element)+1) 
// }else{
//     frequencyMap.set(element,1)
// }
// })

// frequencyMap.forEach((key,value)=>{
// console.log(`element:${key} & freuency:${value} `);
// })


// const today=new Date()
// const fivedayslater=new Date()
// fivedayslater.setDate(today.getDate()+16)

// console.log(fivedayslater);


// let array=[12,2334,324,45,345,3434,22]

// for(number in array.keys()){
//     console.log(number);
// }




const  a=[33,453,4,3423,234,23]
const set=new Set(a)
set.add(34)
set.delete(234)

if(set.has(33)){
    console.log("yes the  vlaue exists ");
}
console.log(set);
const mymap=new Map()
mymap.set(1,'name')
mymap.set(2,"id")
console.log(mymap);
for(m of mymap){
    console.log(m);
}