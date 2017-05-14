import { Component, OnInit } from '@angular/core';

import { GridDataService } from './grid-data.service';

declare let dhtmlXGridObject: any;

@Component({
    selector: 'grid',
    template: `<div id="gridbox" style="width:300px;height:600px"></div> `
})
export class GridComponent implements OnInit {

    private grid: any;

    constructor(private gridDataService: GridDataService) {}

    ngOnInit() {
        this.grid = new dhtmlXGridObject('gridbox');

        this.grid.setImagePath('./codebase/imgs/');
        this.grid.setHeader('Sales,Book title,Author,Price');//the headers of columns
        this.grid.setInitWidths('100,250,150,100');          //the widths of columns
        this.grid.setColAlign('right,left,left,left');       //the alignment of columns
        this.grid.setColTypes('ro,ed,ed,ed');                //the types of columns
        this.grid.setColSorting('int,str,str,int');

        this.grid.init();

        this.loadData();
    }

    private loadData(): void {
        this.gridDataService
            .getData()
            .subscribe((data) => {
                this.grid.parse(data, 'json');
            });
    }

}
