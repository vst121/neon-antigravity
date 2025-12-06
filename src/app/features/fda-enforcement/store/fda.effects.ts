import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FdaEnforcementService } from '../../../core/services/fda-enforcement.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FdaActions from './fda.actions';

@Injectable()
export class FdaEffects {
    private actions$ = inject(Actions);
    private fdaService = inject(FdaEnforcementService);

    loadReports$ = createEffect(() => this.actions$.pipe(
        ofType(FdaActions.loadReports),
        mergeMap(() => this.fdaService.getEnforcementReports()
            .pipe(
                map(response => FdaActions.loadReportsSuccess({ response })),
                catchError(error => of(FdaActions.loadReportsFailure({ error })))
            ))
    ));
}
