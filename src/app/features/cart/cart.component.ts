import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { selectCartItems } from '../../core/store/cart/cart.selectors';
import { removeFromCart, clearCart } from '../../core/store/cart/cart.actions';

@Component({
    selector: 'app-cart',
    standalone: true,
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
    template: `
    <div class="cart-container">
      <h1>Shopping Cart</h1>
      
      <div *ngIf="(cartItems$ | async)?.length === 0" class="empty-cart">
        <mat-icon>remove_shopping_cart</mat-icon>
        <p>Your cart is empty.</p>
      </div>

      <div class="cart-items">
        <mat-card *ngFor="let item of cartItems$ | async" class="cart-item">
            <mat-card-header>
                <mat-card-title>{{ item.recalling_firm }}</mat-card-title>
                <mat-card-subtitle>{{ item.product_description }}</mat-card-subtitle>
            </mat-card-header>
            <mat-card-actions align="end">
                <button mat-button color="warn" (click)="removeItem(item.event_id)">Remove</button>
            </mat-card-actions>
        </mat-card>
      </div>

      <div class="cart-actions" *ngIf="(cartItems$ | async)?.length !== 0">
        <button mat-raised-button color="warn" (click)="clearAll()">Clear Cart</button>
        <button mat-raised-button color="primary">Checkout (Mock)</button>
      </div>
    </div>
  `,
    styles: [`
    .cart-container {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }
    .empty-cart {
        text-align: center;
        padding: 4rem;
        color: #888;
        mat-icon { font-size: 4rem; width: 4rem; height: 4rem; margin-bottom: 1rem; }
    }
    .cart-item {
        margin-bottom: 1rem;
    }
    .cart-actions {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        justify-content: flex-end;
    }
  `]
})
export class CartComponent {
    private store = inject(Store);
    cartItems$ = this.store.select(selectCartItems);

    removeItem(itemId: string) {
        this.store.dispatch(removeFromCart({ itemId }));
    }

    clearAll() {
        this.store.dispatch(clearCart());
    }
}
