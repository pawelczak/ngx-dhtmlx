declare var dhtmlXGridObject: any;

export class TreeGrid {

    private grid: any;

    init(id: string): void {
        this.grid = new dhtmlXGridObject(id);
        this.grid.setImagePath('assets/libs/treegrid/imgs/');
        // this.grid.setHeader('Tree,Plain Text,Text,Check 1,Check 2');
        // this.grid.setInitWidths('150,100,100,100,100');
        // this.grid.setColAlign('left,left,left,center,center');
        // this.grid.setColTypes('tree,ed,txt,ch,ch');
        // this.grid.setColSorting('str,str,str,na,str');
        // this.grid.enableAutoWidth(true);

        this.grid.setHeader('Tree,Plain Text');
        // this.grid.setInitWidths('150,100,100,100,100');
        // this.grid.setColAlign('left,left,left,center,center');
        this.grid.setColTypes('tree,ed');
        // this.grid.setColSorting('str,str,str,na,str');
        // this.grid.enableAutoWidth(true);

        this.grid.init();
    }

    parse(tasks: any): void {
        this.grid.parse(tasks, 'json');
    }

    expandAll(): void {
        this.grid.expandAll();
    }

    collapseAll(): void {
        this.grid.collapseAll();
    }

}