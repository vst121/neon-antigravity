import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdaEnforcementService, FdaEnforcementResult } from '../../core/services/fda-enforcement.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadReports } from './store/fda.actions';
import { selectReports, selectLoading, selectError } from './store/fda.selectors';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-fda-enforcement',
    standalone: true,
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    templateUrl: './fda-enforcement.component.html',
    styleUrls: ['./fda-enforcement.component.scss']
})
export class FdaEnforcementComponent implements OnInit {
    reports$: Observable<FdaEnforcementResult[]> | undefined;
    loading$: Observable<boolean> | undefined;
    error$: Observable<any> | undefined;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.store.dispatch(loadReports());
        this.reports$ = this.store.select(selectReports);
        this.loading$ = this.store.select(selectLoading);
        this.error$ = this.store.select(selectError);
    }
}
