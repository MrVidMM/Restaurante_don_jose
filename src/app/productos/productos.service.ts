import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [
    {
      id:'1',
      titulo:'Cazuela',
      url : "https://www.parral.cl/images/t030.png?crc=173551096",
      comentarios : ["delicioso plato", "un plato para repetirse"]
    },

    {
      id:'2',
      titulo:'Chorrillana',
      url : "https://www.superpollo.cl/img/recetas/chorrillana-pollo.webp",
      comentarios : ["delicioso plato", "un plato para repetirse"]
    }
  ];

  constructor() { }

  // Listar productos
  getProductos() {
    return [...this.productos]
  }

  // Agregar producto
  addProductos(titulo: string, url : string, comentarios: string[]) {
    this.productos.push(
      {
        id: this.productos.length + 1 + "",
        titulo: titulo,
        url : url,
        comentarios : comentarios
      }
    )
  }

  // Eliminar producto
  deleteProductos(productoID: string) {

    this.productos = this.productos.filter( p => {
      return p.id != productoID
    })
  }

  // Buscar por id
  getProductosById(productoID: string) {
    return {
      ...this.productos.find( p => {
        return p.id === productoID
      })
    }
  }
}
