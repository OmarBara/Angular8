import { Component } from "@angular/core"

@Component({
    selector: 'app-server',
  templateUrl: './server.component.html'

})
export class serverComponent {
    serverId=10;
    serverName='ServerXmaX';
    serverStatus(){
        return this.serverName
    }

}