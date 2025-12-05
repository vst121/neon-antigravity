import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FdaEnforcementService, FdaEnforcementResult } from '../../core/services/fda-enforcement.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

    constructor(private fdaService: FdaEnforcementService) { }

    ngOnInit(): void {
        this.reports$ = this.fdaService.getEnforcementReports().pipe(
            map(response => response.results)
        );
    }
}
