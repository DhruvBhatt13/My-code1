 var a=[9,9,9]
var c=1
for(let i=a.length-1;i>=0;i--){
    a[i]=a[i]+c
    if(a[i]>9){
        c=Math.floor(a[i]/10)
        a[i]=a[i]%10
    }else{
        c=0
    }
}
if(c>0){
    a.splice(0,0,c)
}
console.log(a)
var a=[10,5,2,1]
var b=[9,4,3]
var i=0
var j=0
while(b.length>j && a.length>i){
   if(a[i]>b[j]){ 
    b.splice(j,0,a[i])
    a.splice(0,1) 
      }j++
}
for(let k=0;k<a.length;k++){
    b.splice(b.length,0,a[k])
}
console.log(b)

var a=500000;
var b=[]
var i=2

while(i<=a){
  var flag=true;
  var j=2
  while(j<i){
    if(i%j==0){
      flag=false;
    }j++
  }
  if (flag==true){
    b.push(i)
  }i++
}
console.log(b)

var a="({})[][[[[[]]]]]"
var b=[]
for(let i=0;i<a.length;i++){
  if(a[i]=="(" || a[i]=="[" || a[i]=="{" ){
    b.push(a[i])
  }else if(a[i]==")" || a[i]=="]" || a[i]=="}" ){
    var c= b.pop()
    if((a[i] == ')' && c=='(') || (a[i]=='}' && c=='{') || (a[i] == ']' && c=='[')){

    }else{
      console.log(false);
      return;
    }
  }
}
if(b.length>0){
  console.log(false)
}else{
  console.log(true)
}
var a=10
var b=[]
for(let i=0;i<a;i++){
    var c=[]
    for(let j=0;j<=i;j++){
      if(j==0 || j==i){
        c.push(1)
      }else{
        c.push(b[i-1][j-1]+b[i-1][j])
      }
    }
    b.push(c)
  }
  console.log()


var n=10
var array=new Array(n).fill(1)
for(let i=2;i<n;i++){
    for(let j=i-1;j<n;j+=i)
   { 
    if(array[j]==1){
        array[j]=0
    }else{
        array[j]=1
    }
}
}
if(array[n-1]==1){
    array[n-1]=0
}else{
    array[n-1]=1
}
 
var count=array.filter(num=> num===1).length
console.log(count)
console.log(array)
{
if(s.length<1) return 0
var count=0
let j=0
while(j<=s.length){
    if(s[j]!=" "){
        break
    }j++
}
for(let i=j;i<s.length;i++){
    if(s[i]==" " && s[i-1]!=" "){
    count++
 }
}
if(s[s.length-1]!=" "){
count+=1
}
return count
};
