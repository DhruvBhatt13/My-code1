const array=[10,2040,40,50,30,40,50,60]
var x=500
var a=true
for(let i=0;i<array.length;i++){
    if(x==array[i]  ){
        console.log(i)
        a=false
    }
}
if(a){
    console.log("number is not found")
}