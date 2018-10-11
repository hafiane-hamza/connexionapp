import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';




import { AppComponent }  from './app.component';
import { routing }        from './app.routing';


import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { ConditionComponent } from './condition';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ConditionComponent
  ],
  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
