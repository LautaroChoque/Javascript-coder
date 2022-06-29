

let repetir = true

while(repetir){
    let numero = parseInt(prompt("¿Cuantas Champions tiene el Real Madrid?"))
    if(numero === 14){
        repetir = false
        alert("Has acertado")
    }
    else if(numero >15 && 20){
        alert("Un poco menos")
        
    }
    else if(numero >10 && 12){
        alert("Estas cerca")
        
    }

    else if(numero >5 && 10){
        alert("Un poco mas")
        
    }
    else if(numero >0 && 5){
        alert("Tan pocas no")
        
    }
    else if(isNaN(numero)){
        alert("Solo numeros pa")
    }
    else{
        alert("Intentalo de nuevo")
    }
}

