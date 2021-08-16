let nombrePlanetas = Array ('Tierra','Marte','Jupiter') ;
let distancia =[5,3,'67'];
const tamaño = [10,20,30];

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);

//ciclo while
let i=0;
while(i <= nombrePlanetas.length - 1){
    console.log(i)
    console.log(nombrePlanetas[i]);
    i =i + 1
}

//Ciclo for
for (let index = 0; index < nombrePlanetas.length; index++) {
    console.log(nombrePlanetas[index]);
}

console.log('In')
for (const key in nombrePlanetas) {

    console.log(nombrePlanetas[key])
}

//operador de igualdad
for (const key in distancia) {

    if(distancia[key] == '5'){
        console.log('Se encontró la distancia')}
    else{
        console.log('No se encontró la distancia')
    }
}

for (const key in distancia) {

    if(distancia[key] === '5'){
        console.log('Se encontró la distancia')}
    else{
        console.log('No se encontró la distancia')
    }
}

//Recorrer planeta
for (const planeta of nombrePlanetas) {
    console.log(planeta)
}