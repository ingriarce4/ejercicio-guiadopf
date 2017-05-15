//mencionamos dos arreglos
var l1 = [1,2,3];
var l2 = [2,3,4];

//Solución de ejercicio guiado de la forma imperativa
function intersection(l1,l2){
	var l3 = [];
	for(var i=0; i<l1.length; i++){
		for(var j=0; j<l2.length; j++){
			if(l1[i]==l2[j]){
				l3.push(l1[i]);
			}
		}
	}
	return l3;
}

//Solución del ejercicio guiado de la manera declarativa 
function intersectionSet2(l1,l2){
	return l1.filter(function(n){
		return l2.indexOf(n) !== -1
	});
}

//Segundo ejercicio guiado de programación funcional
var productos = [
	{
		nombre: "pijama",
		tipo: "ropa"
	},
	{
		nombre: "nevera",
		tipo: "electrodomestico"
	},
	{
		nombre: "asus",
		tipo: "computador"
	},
	{
		nombre: "macbook",
		tipo: "computador"
	},
	{
		nombre: "toshiba",
		tipo: "computador"
	}
];

//Solucion imperativa
var computadores = [];
for(var i=0; i<productos.length; i++){
	if (productos[i].tipo === "computador"){
		computadores.push(productos[i]);
	}
}

//Solucion declarativa o funcional
var computadores = productos.filter(function(producto){
	return producto.tipo === "computador";
});