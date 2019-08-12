import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {

    constructor(private httpClient: HttpClient) {
    }

    get(): Observable<string> {
        const url = environment.apiUrl + 'home/get';
        return this.httpClient.get<string>(url);
    }
}