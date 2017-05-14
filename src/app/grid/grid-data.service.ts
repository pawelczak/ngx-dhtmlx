import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GridDataService {

    getData(): Observable<any> {
        return Observable.of({
            rows: [
                {id: 1, data: ['A Time to Kill', 'John Grisham', '100']},
                {id: 2, data: ['Blood and Smoke', 'Stephen King', '1000']},
                {id: 3, data: ['The Rainmaker', 'John Grisham', '-200']}
            ]
        });
    }

}
