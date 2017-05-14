import { NgModule } from '@angular/core';

import { GanttComponent } from './gantt.component';
import { TaskService } from './task/task.service';
import { LinkService } from './link/link.service';

@NgModule({
    imports: [],
    declarations: [
        GanttComponent
    ],
    providers: [
        TaskService,
        LinkService
    ]
})
export class GanttModule {}