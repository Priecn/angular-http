import { Component, OnInit } from '@angular/core';
import { Server } from './server.model';
import { ServerService } from './server.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private serverService: ServerService) {}

  appHeader = this.serverService.getAppHeader();

  ngOnInit() {
    
    this.serverService.getServers().subscribe(
      (servers: Server[]) => {
          this.servers = servers;
        },
      (error) => console.log(error)
    );
  }
  servers = [
    new Server(this.generateId(), 'Test Server', 10),
    new Server(this.generateId(), 'Live Server', 100)
  ];

  onAddServer(name: string){
    this.servers.push(
      new Server(this.generateId(), name, 50)
    );
  }
  
  onSaveServers() {
    this.serverService.storeServers(this.servers)
                      .subscribe(
                        (response) => console.log(response),
                        (error) => console.log(error)
                      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
