import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GrowlModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { ConnectingServerComponent } from './connecting-server/connecting-server.component';
import { CommonModule } from '../../node_modules/@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { Route, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { MatIconModule, MatButtonModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatSelectModule, MatChipsModule, MatDividerModule, MatStepperModule, MatListModule, MatExpansionModule, MatCardModule, MatSidenavModule, MatProgressBarModule, MatProgressSpinnerModule, MatDatepickerModule, MatTabsModule, MatMenuModule, MatToolbarModule, MatCheckboxModule, MatRadioModule, MatSlideToggle, MatSlideToggleModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
//import { Employee } from '../emd-details';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const ROUTES: Route[] = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'connecting-server', component: ConnectingServerComponent},
  { path: 'employees', component: EmployeesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ConnectingServerComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GrowlModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    MatStepperModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})

export class AppModule { }
