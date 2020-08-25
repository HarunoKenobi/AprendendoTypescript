function error(message:string): never{
    throw new Error(message);
}

function infinityLoop(): never{
    while(true){
        console.log("infinito");
    }
}