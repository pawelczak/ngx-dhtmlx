import { NgModule } from '@angular/core';

import { TreeGridComponent } from './tree-grid.component';
import { TaskService } from './task/task.service';
import { MockTaskService } from './mock-tasks.service';
import { TasksGenerator } from './task/tasks.generator';

@NgModule({
    imports: [],
    declarations: [
        TreeGridComponent
    ],
    providers: [
        TaskService,
        MockTaskService,
        TasksGenerator
    ]
})
export class TreeGridModule {}