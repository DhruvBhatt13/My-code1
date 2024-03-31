var a=[2,11,1,2,3,3,4,5,5,6,9]
var b=[]
var c=0
for(let i=0;i<a.length;i++){
    for(let j=0;j<a.length;j++){
        if(a[i]==a[j]){
            c++
        }
    }if(c==1){
        b.push(a[i])
    }c=0
}
console.log(b)