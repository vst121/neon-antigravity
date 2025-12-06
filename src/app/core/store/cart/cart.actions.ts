import { createAction, props } from '@ngrx/store';
import { FdaEnforcementResult } from '../../services/fda-enforcement.service';

export const addToCart = createAction(
    '[Cart] Add To Cart',
    props<{ item: FdaEnforcementResult }>()
);

export const removeFromCart = createAction(
    '[Cart] Remove From Cart',
    props<{ itemId: string }>() // Assuming event_id or similar unique ID
);

export const clearCart = createAction(
    '[Cart] Clear Cart'
);
