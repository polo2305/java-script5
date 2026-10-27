// ==========================================
// PRE-ENTREGA 5: INSTANCIANDO OBJETOS Y CLASES
// ==========================================

// 1) DEFINICIÓN DE LA CLASE Y SUS PROPIEDADES (Mínimo 4 propiedades)
class Producto {
    constructor(id, nombre, precio, stock, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }

    // 2) MÉTODO DE INSTANCIA: Simula la venta restando stock si hay disponibilidad
    vender(cantidad) {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`✅ Venta exitosa: Compraste ${cantidad} unidad(es) de "${this.nombre}". Stock restante: ${this.stock}`);
            return true;
        } else {
            console.log(`❌ Stock insuficiente para "${this.nombre}". Solo quedan ${this.stock} disponibles.`);
            return false;
        }
    }

    // Método adicional: Aplica un descuento al precio del producto
    aplicarDescuento(porcentaje) {
        let descuento = (this.precio * porcentaje) / 100;
        this.precio -= descuento;
        console.log(`🏷️ Descuento aplicado a "${this.nombre}". Nuevo precio: $${this.precio}`);
    }
}

// 3) INSTANCIACIÓN: Creación de al menos tres objetos reales usando el operador 'new'
const producto1 = new Producto(1, "Zapatillas deportivas", 25000, 10, "Calzado");
const producto2 = new Producto(2, "Remera de algodón", 8000, 15, "Indumentaria");
const producto3 = new Producto(3, "Mochila urbana", 18000, 5, Accesorios = "Accesorios");

// Creamos un array que almacene nuestros objetos (conectando con la Pre-Entrega 4)
const catalogoProductos = [producto1, producto2, producto3];

console.log("=== CATÁLOGO INICIAL DE PRODUCTOS ===");
console.log(catalogoProductos);

// 4) VERIFICACIÓN Y PRUEBAS DE MÉTODOS CON CONSOLE.LOG
console.log("\n--- Probando métodos de instancia ---");
producto1.aplicarDescuento(10); // Aplica 10% de descuento a las zapatillas
producto1.vender(3);            // Vende 3 zapatillas y actualiza el stock

// 5) INTEGRACIÓN CON LAS HERRAMIENTAS ANTERIORES (Ciclos y Funciones)
function listarCatalogo(catalogo) {
    console.log("\n==================================");
    console.log("📋 ESTADO FINAL DEL INVENTARIO:");
    console.log("==================================");
    for (const item of catalogo) {
        console.log(`ID: ${item.id} | Producto: ${item.nombre} | Precio: $${item.precio} | Stock: ${item.stock} | Categoría: ${item.categoria}`);
    }
}

// Invocamos la función de recorrido
listarCatalogo(catalogoProductos);