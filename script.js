// // string o texto
// let nombre = "Lautaro"; 
// let apellido = "Choque";
// // number
// let sueldo = 1000
// // boolean o logica
// let esEstudiante = true
// // null o vacio
// let esPropietario = null
// // undefined o no definido
// let esPadre = undefined
// // const no se modifica, es unico
// const IVA = 1.21

// console.log(esPropietario)
// nombre = "Zapayo"
// console.log(nombre)

// // desayuno es igual a cafe
// let desayuno = prompt("Ingrese su desayuno").toLowerCase()
// // desayuno es igual a cafe? Condicional siempre con doble ==
// if(desayuno =="cafe"){
//     console.log("desayuno cafe con leche"); 
// } 
// else if(desayuno == "te"){
//     console.log("desayuno te con leche")
// }   
// else if (desayuno == "mate cocido"){
//     console.log("desayuno mate cocido")
// }
// else{
//     console.log ("desayuno mate")
// }

// parsefloat() pasa texto a numero
// let numero = parseFloat(prompt("ingrese un numero"))

// console.log(numero)

// if(isNaN(numero)) {
//     alert("Numero no valido")
// }
// else {
//     console.log(numero + 5)
// }
// parseint() paso string a numeros enteros, elimino decimales 


// let nota = parseInt( prompt("Ingrese una nota"))

// if(nota >= 1 && nota <= 5){
//     alert("Alumno desaprobado")
// }
// else if(nota === 6 || nota === 7){
//     alert("Alumno aprobado BIEN")
// }
// else if(nota === 8 || nota === 9){
//     alert("Alumno aprobado MUY BIEN")
// }
// else if(nota === 10){
//     alert("Alumno aprobado excelente")
// }
// else{
//     alert("Nota no valida")
// }


// let nota = parseInt(prompt("Ingrese una nota"))

// let desaprobado = (nota >=1 && nota <=5)

// let bien = (nota === 6 || nota === 7)

// let muyBien = (nota === 8 || nota === 9)

// let excelente = (nota === 10)


//     if(desaprobado){
//         alert("Desaprobado")
//     }
//     else if(bien){
//         alert("Aprobado bien")
//     }
    
//     else if(muyBien){
//         alert("Aprobado muy bien")
//     }
//     else if(excelente){
//         alert("Aprobado excelente")
//     }
//     else{
//     alert("Nota no valida")
// }

// for

// for(let i = 1; i <=100; i++){
    
//     if(i % 2 !==0){
//         continue
//     }
//     console.log(i)
// }

// break corto el ciclo 
// continue salto la siguiente iteraccion

// let acumulador = 0


// for(let i = 1; i <=10; i++){
//     acumulador = acumulador + i
// }

// console.log(acumulador)

// let repetir = true

// while(repetir){
//     let palabra = prompt("ingrese NO para salir").toLowerCase()
//     if(palabra =="no"){
//         repetir = false
//     }
    
// }

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

// let repetir, numero 


// do {
//     repetir = parseFloat(prompt("Cuantas champions gano el real madrid"))
//     numero === 14 
//     alert("Numero correcto")

// }while(isNaN(repetir))

// console.log(repetir)
// console.log(numero)


// function saludar(nombre)
// return `hola me llamo ${jorge} y mi nombre es juan cruz`
// alt96 
