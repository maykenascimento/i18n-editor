import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatOptionModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatTooltipModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatSlideToggleModule, MatButtonToggleModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatOptionModule, MatSelectModule, MatRadioModule, MatProgressSpinnerModule, MatTooltipModule, MatSliderModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatSlideToggleModule, MatButtonToggleModule,
    FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
