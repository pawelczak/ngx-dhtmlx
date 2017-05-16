// 3d party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebase } from '../environment/firebase';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { reducer } from './app.reducers';
import { GanttModule } from './gantt/gantt.module';
import { GridModule } from './grid/grid.module';
import { TreeGridModule } from './treegrid/tree-grid.module';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        routing,
        BrowserAnimationsModule,
        MaterialModule.forRoot(),
        StoreModule.provideStore(reducer),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 10
        }),
        AngularFireModule.initializeApp(firebase),
        AngularFireDatabaseModule,
        GanttModule,
        GridModule,
        TreeGridModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
