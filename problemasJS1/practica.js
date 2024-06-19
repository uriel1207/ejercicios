let clientes=['cliente1','cliente2'];
let empleados=['empleado1','empleado2'];
//concat
let contactos=clientes.concat(empleados);
console.log(contactos);
//join
let contactos1=clientes.join(empleados);
console.log(contactos1);
//push
clientes.push(...empleados);
console.log(clientes);
//splice
clientes.splice(clientes.length,0,...empleados);
console.log(clientes);

//ejercicio2
let numers=[5,32,43,4];
let result=numers.filter(function (n){
    return n % 2 !==0;
});
console.log(result);

//ejercicio3
let people=[{
    id:1,
    name:'John',
    age:28
},{
    id:2,
    name:'Jane',
    age:31
}, {
    id:3,
    name:'Peter',
    age:55
}];
let menores=people.filter(function(person){
    return person.age<30;
});
console.log(menores);

//ejercicio4
let people1 = [
    { name: "bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 4}
];
function numerodeVeces(arreglo) {
    let conteo = {};

    arreglo.forEach(function(person) {
        let name = person.name; 

        if (conteo[name]) {
            conteo[name]++;
        } else {
            
            conteo[name] = 1;
        }
    });

    return conteo; 
}
let veces = numerodeVeces(people1);
console.log(veces);

//ejercicio5
var myArray = [1, 2, 3, 4];

function encontrarMaximoYMinimo(arr) {
    if (arr.length === 0) {
        console.log("El arreglo está vacío.");
        return;
    }

    let maximo = arr[0];
    let minimo = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
        if (arr[i] < minimo) {
            minimo = arr[i];
        }
    }

    console.log("Número máximo:", maximo);
    console.log("Número mínimo:", minimo);
}
encontrarMaximoYMinimo(myArray);

//ejercicio6
var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};

function sortKeysByValue(obj) {
    
    let keys = Object.keys(obj);
    
    
    keys.sort(function(a, b) {
        return obj[a] - obj[b];
    });
    
    return keys;
}
var sortedKeys = sortKeysByValue(object);
console.log(sortedKeys);