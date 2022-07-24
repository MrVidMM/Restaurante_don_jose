import { Component, OnInit } from '@angular/core';
import  { ProductosService } from '../productos.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.page.html',
  styleUrls: ['./detalle-productos.page.scss'],
})
export class DetalleProductosPage implements OnInit {

  private datos = {}
  constructor(private Servicio: ProductosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Este método captura el valor que viene por la url
    // Si quisiera que capturara de forma dinámica usare el metodo suscribe()
    this.activatedRoute.paramMap.subscribe( p => {

      this.datos = this.Servicio.getProductosById( p.get('productoID') )
      
      console.log(this.datos)
    })
  }

}
