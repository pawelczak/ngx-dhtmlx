import { Component, OnInit } from '@angular/core';
import { TreeGridService } from './tree-grid.service';

declare let dhtmlXGridObject: any;

@Component({
    selector: 'tree-grid',
    template: `<div id="tree-grid" style="width:550px;height:250px;background-color:white"></div>`
})
export class TreeGridComponent implements OnInit {

    private treeGrid: any;

    constructor(private treeGridService: TreeGridService) {
    }

    ngOnInit() {
        this.treeGrid = new dhtmlXGridObject('tree-grid');
        this.treeGrid.setImagePath('assets/libs/treegrid/imgs/');
        this.treeGrid.setHeader('Tree,Plain Text,Text,Check 1,Check 2');
        this.treeGrid.setInitWidths('150,100,100,100,100');
        this.treeGrid.setColAlign('left,left,left,center,center');
        this.treeGrid.setColTypes('tree,ed,txt,ch,ch');
        this.treeGrid.setColSorting('str,str,str,na,str');
        this.treeGrid.enableAutoWidth(true);
        this.treeGrid.init();

        this.treeGridService
            .getTasks()
            .subscribe((tasks: any) => {
                this.treeGrid.parse(tasks, 'json');
            });

    }
}