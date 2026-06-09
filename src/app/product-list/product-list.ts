import { Component, inject, signal } from '@angular/core';
import { Prd } from '../models/prd';
import { PrdService } from '../services/prd.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  // prds = signal<Prd[]>([])
  prdService = inject(PrdService)
  prdList = toSignal(this.prdService.getPrds(), {
    initialValue: []
  })

  // constructor(){
  //   this.prdService.getPrds().subscribe({
  //     next: (data)=>{
  //       this.prds.set(data)
  //     },
  //     error: err => console.log(err)
      
  //   })
  // }

}
