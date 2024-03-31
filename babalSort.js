var a=[10,8,2,5,1,4,3,7,9]
var b
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