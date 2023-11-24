


// function cuentaPorFavor(orden){

//     let parcialTotal = orden.map(x => x.cantidad * x.precio);
//     let total = 0;
//     /*for (let i =0; i<parcialTotal.length; i++){
//         total += parcialTotal[i];
//     }*/
//     total = parcialTotal.map(e =>e=e+e);
//     return total;
// }

// var comidas = [
//     {
//         nombre: 'pizza',
//         cantidad : 6,
//         precio: 6
//     },
//     {
//         nombre: 'coca-cola',
//         cantidad : 3,
//         precio: 2
//     }
// ];

// console.log(cuentaPorFavor(comidas));

// var usuarios1 = {
//     toni:{
//         edad: 33,
//         online : true,
//     },
//     emi:{
//         edad: 25,
//         online : true,
//     },
//     fran:{
//         edad: 25,
//         online : true,
//     },
//     agus:{
//         edad: 24,
//         online : false,
//     }
// }

// function cuantosOnline(usuarios){


//     let usuarioEnLinea = Object.values(usuarios);
//     let usuarioEnLineaContados = usuarioEnLinea.filter(usuarios => usuarios.online === true);

//     return usuarioEnLineaContados.length;
//     // let contador = 0;
    
//     // for(let i in usuarios){

//     //     if(usuarios[i].online === true){
//     //         contador++;
//     //     }
//     //     console.log(usuarios[i]);
//     // }
//     // return contador;
// }
    
// console.log(cuantosOnline(usuarios1));


//  [98,true]
// function mayorPar (numbers){

//     let newArr = [];
//     let mayor = -Infinity;
//     let par=0;
//     for(let i= 0; i<numbers.length; i++){
//         if(numbers[i]> mayor && numbers[i] % 2 === 0){
            
//             mayor = numbers[i];

//         }
//     }
//     newArr.push(mayor, true)
//     return newArr;
// }

// numbers1 = [15, 85, 64, 32, 22, 74, 98, 21, 67];
// console.log (mayorPar(numbers1))

//problema 5 de jack

// var invitados1 = {
//     luna:{
//         vegan: false
//     },
//     sebas:{
//         vegan: false
//     },
//     marce:{
//         vegan: true
//     },
//     nicky:{
//         vegan: true
//     },
//     nicsky:{
//         vegan: true
//     },
//     niscky:{
//         vegan: true
//     }
// };

// function vegan(invitados){
//     let count = 0;
//     for (let clave in invitados){
//         if(invitados[clave].vegan === true){
//             count++;
//         }
       
//     }    
       
//     return count
// }

// console.log(vegan(invitados1))

//porblema 1 jack

// function mayorPar (numbers){

//     let mayor = 0
//     let esPar = true;
       
//     for (let i =0;i < numbers.length; i++){
//         if(numbers[i]>mayor){
//             mayor = numbers[i];
//             esPar = numbers[i] % 2 ===0        
//         }
//     }return [mayor, esPar];
//     }
    
//     numbers1 = [15, 85, 64, 622, 22, 74, 791, 21, 67];
//     console.log (mayorPar(numbers1))

// function fiestaDeDisfraces(personas){

// let newArr = [];
//     for (let clave in personas){
//         if (personas[clave].personaje!=null){
//             newArr.push(personas[clave].nombre)
//         }
        
//     }return newArr;
// }

// let personas1 = [
//     {nombre: "juan", disfraz : true, personaje: "wally"},
//     {nombre: "mariana", disfraz : true, personaje: "la momia"},
//     {nombre: "pedro", disfraz : false}
// ]

// console.log(fiestaDeDisfraces(personas1));

// var usuarios1 = {
//     toni:{
//         edad: 30,
//         online: true,
//     },
//     emi:{
//         edad: 20,
//         online: true,
//     },
//     fran:{
//         edad: 25,
//         online: true,
//     },
//     agus:{
//         edad: 25,
//         online: true,
//     }
// }

// function cuantosOnline(usuarios){
//     let count = 0;
//     for (let i in usuarios){
//         count += usuarios[i].edad;
//         // if (usuarios[i].online === true){
//         //     count++;
//         // }
//     }return count;
// }

// console.log(cuantosOnline(usuarios1));
// numeros1=[9, 17, 6, 20, 4, 2];


// function mayorMenor(numeros){

//     let mayor = -Infinity,
//         menor = Infinity;

//     for (let i in numeros){
//         if(numeros[i]>mayor){
//             mayor = numeros[i];        
//         }else if(numeros[i]<menor){
//             menor = numeros[i];
//         }
//     }
//     return [menor, mayor];
// }

// console.log(mayorMenor(numeros1));

// function mayorMenosMenor (numeros){
//     if (numeros.length===0) return "El array esta vacío"

//     let mayor = numeros[0],
//         menor = numeros[0];
//     for (i in numeros){
//         if (numeros[i]>mayor){
//             mayor = numeros[i];
//         }else if (numeros[i]<menor){
//             menor = numeros[i];
//         }
//     }return mayor - menor

// }

// console.log(mayorMenosMenor([ ]))

// var figura1 = {
//     tipo: 'cuadrado',
//     base: 6,
//     altura: 8
// }

// function calcularArea(figura){

//     area = 0;
//     switch(figura.tipo){
//         case 'triangulo':
//             area = (figura.base * figura.altura)/2;
//             break;
//         case 'rectangulo':
//             area= figura.base*figura.altura;
//             break;
//         default:
//             return "no hay area por que no hay figura";        
        
//     }
//     return area;

// }
// console.log(calcularArea(figura1));




