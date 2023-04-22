import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Body } from './Body/body.component';
import { Form1 } from './Body/Form1/form1.component';
import { Form2 } from './Body/Form2/form2.component';
import { Footer } from './Footer/footer.component';
import { Header } from './Header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Body,
    Footer,
    Form1,
    Form2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
