import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {

 
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
}
 

  socket = io('http://localhost:3000');

  public sendMessage(message:any) {
    this.socket.emit('message', message);
  }
    setupSocketConnection(token: string) {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      auth: {
        token: 'cde'
      }
    });
  }

  public getNewMessage = () => {
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };
}
