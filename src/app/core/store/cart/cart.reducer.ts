import { createReducer, on } from '@ngrx/store';
import { FdaEnforcementResult } from '../../services/fda-enforcement.service';
import * as CartActions from './cart.actions';

export interface CartState {
    items: FdaEnforcementResult[];
}

export const initialState: CartState = {
    items: []
};

export const cartReducer = createReducer(
    initialState,
    on(CartActions.addToCart, (state, { item }) => ({
        ...state,
        items: [...state.items, item]
    })),
    on(CartActions.removeFromCart, (state, { itemId }) => ({
        ...state,
        items: state.items.filter(item => item.event_id !== itemId)
    })),
    on(CartActions.clearCart, state => ({
        ...state,
        items: []
    }))
);
