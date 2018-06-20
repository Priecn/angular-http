import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    new Server(this.generateId(), 'Test Server', 10),
    new Server(this.generateId(), 'Live Server', 100)
  ];

  onAddServer(name: string){
    this.servers.push(
      new Server(this.generateId(), name, 50)
    );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
