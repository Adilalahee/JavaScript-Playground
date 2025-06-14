//datatypes
// let x=5
// let y="adil"
// let z=5.3
// let w=true
// const a=['adil',"akil"]
// const b={"name":"adil","age":"23"}
// let c
// let d=""
// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// console.log(typeof w)
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)

//function
// function sleep() {
//     console.log("This is adil");
// }
// sleep()
// sleep()
// function woke(name) {
//     console.log(name+ "This is adil");
// }
// woke("adil")


//Object
// const car={
//     name:"bmw",
//     color:"blue",
//     weight:499,
//     start:function (time){
//         this.drive()
//         console.log("car has started"+time);   
//     },
//     drive:function () {
//         console.log("Car is driving now");
        
//     }
// }
// console.log(car.color)
// console.log(car['weight']);
// car.start("5pm")

// let x=5
// const y=new Number(5)

// console.log(typeof x);
// console.log(typeof y);
// console.log(y);

//string methods
// let x="This is Bangladesh"
// console.log(x.slice(9,15));
// console.log(x.slice(-14,-10));
// console.log(x.substring(10,19));

// let y="Bangladesh"
// console.log(y.toUpperCase());
// console.log(y.toLowerCase());
// console.log(y.split(""));
// console.log(y.split(","));

//string search
// let z="syed adil mohammad noor-a-alahee"
// console.log(z.indexOf("adil"));
// console.log(z.search("adil"));
// console.log(z.match("adil"));
// console.log(z.includes("adil"));

//template literals
// let mycountry="Bangladesh"
// let population=188
// console.log(`I love ${mycountry} and it has ${population} million population`);


//array
// const cars=["Scania","Volvo","Hundai","Marcedes","Toyota","BMW","BYD"]
// const car=cars.length

// for (i=0;i<car;i++){
//     console.log(cars[i]);
    
// }
// function mycars(value) {
//     console.log(value);
// }
// cars.forEach(mycars)
// Array.isArray(cars)
// console.log(typeof(cars));

// cars.pop()
// console.log(cars);
// cars.push("Cherry")
// console.log(cars);
// cars.join(" | ")
// cars.shift()
// console.log(cars);
// cars.unshift("Saintmartin")
// console.log(cars);
// delete cars[0]
// console.log(cars);

// cars.splice(2,0,"Pajero","Land Rover","Nissan")
// console.log(cars);
// const bike=["Honda","Yamaha","Suzuki","Discover"]
// console.log(cars.concat(bike));
// const bikes=bike.slice(1)
// console.log(bikes);

//arrau sort
//const alphabet=["Google Fiber","Verily","Calico","Deepmind","Google LLC","Waymo","Youtube","Double Click","Wing","Google Adsense","Isomorphic Labs","Nest","Capital G"]
//alphabet.sort()
//console.log(alphabet);
//alphabet.reverse()
//console.log(alphabet);
//const phone=[1,2,3,4,5,6,7,8]
// phone.sort(
//     function (a,b) {
//         return a-b
//     }
// )
//console.log(phone);

// phone.sort(
//     function (a,b) {
//         return b-a
//     }
// )
// console.log(phone[0]);


//Array iteration
//const Meta=["Facebook","Instagram","Whatsapp","Messenger","Meta Platform Technologies","Meta Quest","Mapillary","Beluga","Atlas Solutions","Live Rail","Onavo","Portal","AI Reverie","Ascenda"]
// function myfunction(value,index,array) {
//     console.log(value);
//     console.log(index);
//     console.log(array);
    
// }
// Meta.forEach(myfunction)
// function myfunction(value) {
//     console.log(value);
// }
// Meta.map(myfunction)

//const metaEmployees=[1504,549,482,349,304,1354,193,163,115,122,144,49,62,59,88,16,18,17,32,6,8,13,11,10,1,2,3,4]
// function myfunction(value) {
//     return value<100
// }
// const filterMeta=metaEmployees.filter(myfunction)
// console.log(filterMeta);

// function myfunction(total,value,index,array) {
//     console.log(total);
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     return total+value
// }
// const employeesMeta=metaEmployees.reduce(myfunction)
// console.log(employeesMeta);








