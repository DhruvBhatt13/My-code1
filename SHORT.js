var a=[10,2,7,3,4,6]
var b
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++)
//     {
//         if(a[i]>a[j]){
//             b=a[i];
//             a[i]=a[j];
//             a[j]=b;
            
//         }
//     } 
// }
// console.log(a)
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
        if(a[j]>a[j+1]){
            
             b=a[j];
             a[j]=a[j+1];
             a[j+1]=b;

        }
    }
}
console.log(a) 


















