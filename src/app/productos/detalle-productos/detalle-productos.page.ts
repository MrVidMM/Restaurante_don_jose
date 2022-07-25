import { Component, OnInit } from '@angular/core';
import  { ProductosService } from '../productos.service'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  private datos = {}
  private idProducto = null

  constructor(private Servicio: ProductosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Este método captura el valor que viene por la url
    // Si quisiera que capturara de forma dinámica usare el metodo suscribe()
    this.activatedRoute.paramMap.subscribe( p => {

      this.idProducto = p.get('productoID')
      this.datos = this.Servicio.getProductosById( this.idProducto )
      
      console.log(this.datos)
    })
  }

  eliminarProducto(){

    this.Servicio.deleteProductos(this.idProducto)
    this.router.navigate(['/productos'])

  }

}
