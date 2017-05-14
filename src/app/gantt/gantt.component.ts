import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { TaskService } from './task/task.service';
import { LinkService } from './link/link.service';

declare var gantt: any;

@Component({
    selector: 'gantt',
    styles: [
        `
        :host{
            display: block;
            height: 600px;
            position: relative;
            width: 100%;
        }
    `],
    template: `<div #gantt_here style="width: 100%; height: 100%"></div>`,
})
export class GanttComponent implements OnInit {

    @ViewChild('gantt_here')
    ganttRef: ElementRef;


    constructor(private taskService: TaskService,
                private linkService: LinkService) {}

    ngOnInit(){

        this.configure();

        gantt.init(this.ganttRef.nativeElement);

        let tasks$ = this.taskService.getTasks(),
            links$ = this.linkService.getLinks();

        tasks$
            .zip(links$)
            .subscribe((response: Array<any>) => {
                gantt.parse({data: response[0], links: response[1]});
            });
    }

    private configure() {
        gantt.config.xml_date = '%Y-%m-%d %H:%i';
    }
}