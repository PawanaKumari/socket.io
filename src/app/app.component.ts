import { Component,OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SocketService } from 'src/app/services/socket.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
   newMessage: any;
  messageList: string[] = [];
  tokenForm:any = this.formBuilder.group({
    token:"",
  });

  constructor(private socketService:SocketService,
    private formBuilder: FormBuilder
    ){

  }
  ngOnInit(){
    this.socketService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
      
    })

// this.socketService.setupSocketConnection();
    
    
  }

  submitToken() {
    const token= this.tokenForm.get("token").value;
    if (token) {
      this.socketService.setupSocketConnection(token);
    }
  }
  sendMessage(){
    this.socketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }


  // sendMessage() {
  //   this.socketService.sendMessage();
  //   this.newMessage = '';
  // }
}
