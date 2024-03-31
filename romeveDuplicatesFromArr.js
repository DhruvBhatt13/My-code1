const a=[1,1,1,1,2,2,33,4,4,4,5,5,6]
// var b=[]
// for(let i=0;i<a.length;i++){
//    if (!b.includes(a[i])){
//     b.push(a[i])
//     }
    
// }
// console.log(b)

//============================================================================

let i=0,j
while(i<a.length){
    j=i+1
    while(j<a.length){
        if(a[i]==a[j]){
            a.splice(j,1)
        }else{
            j++;
        }
        
    }
    i++;
}
console.log(a)