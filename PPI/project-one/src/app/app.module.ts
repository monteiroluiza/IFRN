import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TurmaInglesComponent } from './turma-ingles/turma-ingles.component';

@NgModule({
  declarations: [
    AppComponent,
    TurmaInglesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
