import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NumSwapInputComponent } from './nws-input/nws-input.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { NumSwapResultComponent } from './nws-result/nws-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NwsInputMaxnumberComponent } from './nws-input-maxnumber/nws-input-maxnumber.component';
import { NwsInputMultipleswapwordAddComponent } from './nws-input-multipleswapword-add/nws-input-multipleswapword-add.component';
import { NwsInputMultipleswapwordEditComponent } from './nws-input-multipleswapword-edit/nws-input-multipleswapword-edit.component';
import { NwsInputSortedorderComponent } from './nws-input-sortedorder/nws-input-sortedorder.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    NumSwapInputComponent,
    NumSwapResultComponent,
    NwsInputMaxnumberComponent,
    NwsInputMultipleswapwordAddComponent,
    NwsInputMultipleswapwordEditComponent,
    NwsInputSortedorderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
