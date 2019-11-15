import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NfComponent } from './nf/nf.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    VehicleComponent,
    NfComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '',component: HomeComponent},
      {path: 'home',component:HomeComponent},
      {path: 'contact',component:ContactComponent},
      {path: '**',component:NfComponent}
    ])
  ],
  providers: [HttpClientModule],
  //providers: [HttpClientModule, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
