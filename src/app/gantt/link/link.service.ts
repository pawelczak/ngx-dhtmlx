import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Link } from './link';


@Injectable()
export class LinkService {

    getLinks(): Observable<Array<Link>> {
        return Observable.of([
            {id: 1, source: 1, target: 2, type: "0"}
        ]);
    }
}