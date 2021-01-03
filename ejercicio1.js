let parImpar = function (num){
    if(num == 0){
        console.log('Error')

    }else{
        return(num % 2 == 0 ? 'El numero es par':'El numero es Impar' )
    }  
}

console.log(parImpar(6))