import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TasksGenerator {

    generateData(): Observable<any> {
        let data = [];


        for (let i = 0; i < 1000; i += 1) {
            data.push({
                id: "" + 1001 + i,
                data: [
                    {value: "Evaluate Program VII " + i}
                ],
                rows: [
                    {
                        id: "sub_" + 1001 + i,
                        data: [
                            "Rescue the princess"
                        ]
                    },
                    {
                        id: "sub_" + 1002 + i,
                        data: [
                            "Get past the witch"]
                    },
                    {
                        id: "sub_" + 1003 + i,
                        data: [
                            "Rescue the princess"
                        ]
                    },
                    {
                        id: "sub_" + 1004 + i,
                        data: [
                            "Get past the witch"]
                    },
                    {
                        id: "sub_" + 1005 + i,
                        data: [
                            "Rescue the princess"
                        ]
                    },
                    {
                        id: "sub_" + 1006 + i,
                        data: [
                            "Get past the witch"]
                    }
                ]
            });
        }

        return Observable.of(data);
    }

}