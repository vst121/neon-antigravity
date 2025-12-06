import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer';

export const selectCartState = createFeatureSelector<CartState>('cart');

export const selectCartItems = createSelector(
    selectCartState,
    (state: CartState) => state ? state.items : []
);

export const selectCartCount = createSelector(
    selectCartItems,
    (items) => items.length
);
