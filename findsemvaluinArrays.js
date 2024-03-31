const a=[1,2,3,4,5,1]
const b=[2,4,6,7,90,1]
var c=[]
for(let i=0;i<a.length;i++){
    for(let j=0;j<b.length;j++){
        if(a[i]==b[j] && !c.includes(a[i])){
            c.push(a[i])
        }
    }
}
console.log(c)