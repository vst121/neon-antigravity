import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FdaState } from './fda.reducer';

export const selectFdaState = createFeatureSelector<FdaState>('fda');

export const selectReports = createSelector(
    selectFdaState,
    (state: FdaState) => state ? state.reports : []
);

export const selectLoading = createSelector(
    selectFdaState,
    (state: FdaState) => state ? state.loading : false
);

export const selectError = createSelector(
    selectFdaState,
    (state: FdaState) => state ? state.error : null
);
