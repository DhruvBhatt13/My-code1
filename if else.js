// if or else
var a=200,b=40,c=1000,d=50;
if (a>b){
    if(a>c){
        if(a>d){
            console.log("a is greter");
        }else{
            console.log("d is greter");
        }
    }else if(c>d){
        console.log("c is greter");
    }else{
        console.log ("d is greter");
    }
}else if(b>c){
    if(b>d){
        console.log("b is greter");
    }else{
        console.log("d is greter");
    }
}else if(c>d){
    console.log("c is greter");
}else{
    console.log("d is greter");
}
