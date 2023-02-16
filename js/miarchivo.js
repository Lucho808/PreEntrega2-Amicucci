alert("Bienvenidos a Tienda Cat");

let nombre = prompt("Ingrese su nombre:");
alert("Hola " + nombre );

//Class de objetos
class Producto {
    constructor(id, nombre, precio, stock, marca, peso){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.marca = marca;
        this.peso = peso;
    }
    menoStock(){
        this.stock =this.stock - 1;
        console.log('El stock de ${this.nombre} sea actualizado');
    }
}

//Productos

const producto0 = new Producto(0,"Complete gato adulto","$8690",20, "Vital can","15kg");
const producto1 = new Producto(1,"Complete gato adulto","$1320",10,"Vital can","1.5kg");
const producto2 = new Producto(2,"Premium pet food","$4650",5, "Infinity","10kg");
const producto3 = new Producto(3,"Premium pet food","$4650",5, "Infinity","10kg");
const producto4 = new Producto(4,"Premium pet food","$4650",5, "Infinity","10kg");

const productos = [producto0, producto1, producto2]

productos.push(producto3, producto4)

console.log(producto0, producto1, producto2, producto3, producto4)

const arrayCarrito = [producto4]

console.log (arrayCarrito)