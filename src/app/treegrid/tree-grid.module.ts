import { NgModule } from '@angular/core';

import { TreeGridComponent } from './tree-grid.component';
import { TreeGridService } from './tree-grid.service';

@NgModule({
    imports: [],
    declarations: [
        TreeGridComponent
    ],
    providers: [
        TreeGridService
    ]
})
export class TreeGridModule {}