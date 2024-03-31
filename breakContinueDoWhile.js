let i=0;
do{
    if(i==0 || i==4){
        i+=2;
        continue;
    }
    if(i==8){
        break;
    }
    console.log(i);
    i+=2;
}while(i<=10);