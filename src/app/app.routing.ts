// 3d party imports
import { RouterModule, Routes } from '@angular/router';

// app imports
import { HomeComponent } from './home/home.component';
import { GanttComponent } from './gantt/gantt.component';
import { GridComponent } from './grid/grid.component';
import { TreeGridComponent } from './treegrid/tree-grid.component';


const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'gantt', component: GanttComponent},
    {path: 'grid', component: GridComponent},
    {path: 'treegrid', component: TreeGridComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
