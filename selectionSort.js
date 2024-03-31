var a=[2,4,1,3,5]
var b
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            b=a[i];
            a[i]=a[j];
            a[j]=b;
        }
    }
}
console.log(a)