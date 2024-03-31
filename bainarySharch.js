var a=[1,2,3,4,5,6]
var x=7
var start=0
var mid
var flag=true;
var last=a.length-1
while(last>=start){
        mid=Math.floor((start+last)/2);
        if(a[mid]>x){
            last=mid-1;
        }
        else if(a[mid]<x){
            start=mid+1;
        }
        else if(a[mid]==x){
            console.log(mid)
            flag=false;
            break
        }
}
if(flag){
    console.log('Number not found')
}
