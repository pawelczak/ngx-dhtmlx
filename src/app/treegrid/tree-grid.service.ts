import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable()
export class TreeGridService {

    private tasks: FirebaseListObservable<any>;

    constructor(private db: AngularFireDatabase) {
        this.tasks = this.db.list('tasks');

        this.initData();
    }

    getTasks(): Observable<any> {
        return this.tasks.map((list) => {
            return {
                rows: list
            };
        });
    }

    initData(): void {
        this.tasks.remove();

        this.tasks.push({
                id: '1001',
                data: [
                    {"value": "row A", "image": "folder.gif"},
                    "A Time to Kill",
                    "John Grisham",
                    "12.99",
                    "1",
                    "05/01/1998"],
                rows: [
                    {
                        id: 'sub_1001',
                        data: [
                            "subrowA",
                            "Blood and Smoke",
                            "Stephen King",
                            "0",
                            "1",
                            "01/01/2000"
                        ]
                    },
                    {
                        id: 'sub_1002',
                        data: [
                            "subrowB",
                            "Blood and Smoke",
                            "Stephen King",
                            "0",
                            "1",
                            "01/01/2000"]
                    }
                ]
            });

        this.tasks.push({
            id: '1002',
            xmlkids: '1',
            data: [
                "row B",
                "The Green Mile",
                "Stephen King",
                "11.10",
                "1",
                "01/01/1992"]
        });
    }
}
