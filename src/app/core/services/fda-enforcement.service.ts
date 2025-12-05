import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FdaEnforcementResult {
    country: string;
    city: string;
    address_1: string;
    reason_for_recall: string;
    address_2: string;
    product_quantity: string;
    code_info: string;
    center_classification_date: string;
    distribution_pattern: string;
    state: string;
    product_description: string;
    report_date: string;
    classification: string;
    openfda: any;
    recall_number: string;
    recalling_firm: string;
    initial_firm_notification: string;
    event_id: string;
    product_type: string;
    termination_date: string;
    more_code_info: string;
    recall_initiation_date: string;
    postal_code: string;
    voluntary_mandated: string;
    status: string;
}

export interface FdaEnforcementResponse {
    meta: any;
    results: FdaEnforcementResult[];
}

@Injectable({
    providedIn: 'root'
})
export class FdaEnforcementService {
    private apiUrl = 'https://api.fda.gov/food/enforcement.json?limit=10';

    constructor(private http: HttpClient) { }

    getEnforcementReports(): Observable<FdaEnforcementResponse> {
        return this.http.get<FdaEnforcementResponse>(this.apiUrl);
    }
}
