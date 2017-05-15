import { Component, OnInit } from '@angular/core';

declare let dhtmlXGridObject: any;

@Component({
    selector: 'tree-grid',
    template: `<div id="tree-grid" style="width:550px;height:250px;background-color:white"></div>`
})
export class TreeGridComponent implements OnInit {

    private treeGrid: any;


    private data = {
        rows: [
            {id: 1, data: ['A Time to Kill', 'John Grisham', '100']},
            {id: 2, data: ['Blood and Smoke', 'Stephen King', '1000']},
            {id: 3, data: ['The Rainmaker', 'John Grisham', '-200']}
        ]
    };

    ngOnInit() {
        this.treeGrid = new dhtmlXGridObject('tree-grid');
        // this.treeGrid.setImagePath('../../../codebase/imgs/');
        this.treeGrid.setHeader('Tree,Plain Text,Text,Check 1,Check 2');
        this.treeGrid.setInitWidths('150,100,100,100,100');
        this.treeGrid.setColAlign('left,left,left,center,center');
        this.treeGrid.setColTypes('tree,ed,txt,ch,ch');
        this.treeGrid.setColSorting('str,str,str,na,str');
        this.treeGrid.enableAutoWidth(true);
        this.treeGrid.init();
        this.treeGrid.parse(this.data, 'json');
    }
}