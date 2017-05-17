import { Component, OnInit } from '@angular/core';
import { TaskService } from './task/task.service';
import { TreeGrid } from './grid/tree-grid';

@Component({
    selector: 'tree-grid',
    template: `<div id="tree-grid" style="width:550px;height:250px;background-color:white"></div>`
})
export class TreeGridComponent implements OnInit {

    private treeGrid: any;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
        this.treeGrid = new TreeGrid();

        this.treeGrid.init('tree-grid');

        this.taskService
            .getTasks()
            .subscribe((tasks: any) => {
                this.treeGrid.parse(tasks);
            });
    }
}