array=[10,20,30,40,50.6,"a","KEC",true]
console.log(array);
//for...in loop
for(var a in array){
    console.log("Element present in index",a,"is",array[a])
}
//for...of loop
for (var a of array) {
    console.log("The value of array is:",a)
}
//for..each loop
array.forEach(a => {
   console.log(a) 
});