import { Component, inject, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { TruncPipe } from '../../../pipes/trunc-pipe';
import { Prd } from '../../../models/prd';
import { PrdService } from '../../../services/prd.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-prd-card',
  imports: [MatCardModule, MatGridListModule, TruncPipe],
  templateUrl: './prd-card.html',
  styleUrl: './prd-card.css',
})
export class PrdCard {
  // @Input() item:Prd = {} as Prd
  @Input() item!: Prd;

  private cartService = inject(CartService)

  addCart(product: Prd):void{
    const cartItem = {
      product, quantity:1
    }
    this.cartService.addToCart(cartItem).subscribe({
      next: () => {}
    })
  }
  

  
}
