import { createAction, props } from '@ngrx/store';
import { FdaEnforcementResponse, FdaEnforcementResult } from '../../../core/services/fda-enforcement.service';

export const loadReports = createAction(
    '[FDA] Load Reports'
);

export const loadReportsSuccess = createAction(
    '[FDA] Load Reports Success',
    props<{ response: FdaEnforcementResponse }>()
);

export const loadReportsFailure = createAction(
    '[FDA] Load Reports Failure',
    props<{ error: any }>()
);
