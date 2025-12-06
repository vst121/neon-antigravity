import { createReducer, on } from '@ngrx/store';
import { FdaEnforcementResult } from '../../../core/services/fda-enforcement.service';
import * as FdaActions from './fda.actions';

export interface FdaState {
    reports: FdaEnforcementResult[];
    loading: boolean;
    error: any;
}

export const initialState: FdaState = {
    reports: [],
    loading: false,
    error: null
};

export const fdaReducer = createReducer(
    initialState,
    on(FdaActions.loadReports, state => {
        console.log('Action: [FDA] Load Reports');
        return {
            ...state,
            loading: true,
            error: null
        }
    }),
    on(FdaActions.loadReportsSuccess, (state, { response }) => {
        console.log('Action: [FDA] Load Reports Success', response);
        return {
            ...state,
            reports: response.results,
            loading: false
        }
    }),
    on(FdaActions.loadReportsFailure, (state, { error }) => {
        console.log('Action: [FDA] Load Reports Failure', error);
        return {
            ...state,
            loading: false,
            error
        }
    }),
);
