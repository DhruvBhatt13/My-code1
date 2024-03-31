let i=0;
while(i<=10){
    if(i==0 || i==4){
        i+=2;
        continue;
    }
    if(i==8){
        break;
    }
    console.log(i);
    i+=2;
}
