import { Component, OnInit, NgZone } from '@angular/core';
import { TaskService } from './task/task.service';
import { TreeGrid } from './grid/tree-grid';

@Component({
    selector: 'tree-grid',
    template: `

    <button (click)="expandAll()" >Expand all</button>
    <button (click)="collapseAll()" >Collapse all</button>
    <div id="tree-grid" style="width:700px;height:550px;background-color:white"></div>

    `
})
export class TreeGridComponent implements OnInit {

    private treeGrid: any;

    constructor(private taskService: TaskService,
                private ngZone: NgZone) {
    }

    ngOnInit() {
        this.treeGrid = new TreeGrid();

        this.treeGrid.init('tree-grid');

        this.taskService
            .getGeneratedData()
            .subscribe((tasks: any) => {
                this.treeGrid.parse(tasks);
            });
    }

    expandAll(): void {
        this.ngZone.runOutsideAngular(() => {
            this.treeGrid.expandAll();
        });
    }

    collapseAll(): void {
        this.ngZone.runOutsideAngular(() => {
            this.treeGrid.collapseAll();
        });
    }
}
