import { NgModule } from '@angular/core';

import { GridComponent } from './grid.component';
import { GridDataService } from './grid-data.service';

@NgModule({
    imports: [],
    declarations: [
        GridComponent
    ],
    providers: [
        GridDataService
    ]
})
export class GridModule {}