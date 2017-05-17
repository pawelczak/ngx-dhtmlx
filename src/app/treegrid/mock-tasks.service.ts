import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MockTaskService {

    constructor(private http: Http) {}

    getMockTasks() {
        return this.http
                    .get('properties/tasks_mock_data.json')
                    .map((response) => response.json());
    }

}
