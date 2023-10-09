function minimumNumber(x, y){
    if (x > y){
        return y;
    }
    else if(x < y){
        return x;
    }
    else{
        console.log("Numbers are the same")
    }
}

console.log(minimumNumber(6, 5));