import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {environment} from 'src/environments/environment';
// import { SocketIoModule,SocketIoConfig } from 'ngx-socket-io';
import {SocketService} from "./services/socket.service";
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthModule } from './auth/auth.module';

// const config: SocketIoConfig={
//   url: environment.SOCKET_ENDPOINT,
//   options:{
//     transports:['websocket']
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    AuthComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule

  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
