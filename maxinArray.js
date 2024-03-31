const array=[20,10,30,40,60,5,1000,2]
var max=array[0]
var index=0;
for(let i=1;i<array.length;i++){
if(max<array[i]){
    max=array[i]
    index=i
}
    
}
console.log(max+" is max");
console.log(index+" index number");