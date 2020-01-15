import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer= false;
msg ='this is general massege from servers component'
array = ['first', 'second', 'third']
  constructor() { 
    setTimeout(()=>{this.allowNewServer= true},2000)
  }

  ngOnInit() {
  }
  fun(){
      this.msg = 'this XSERVER inside FUN';
      this.array.push(this.msg)
  }
  updateTxt(event){
    // console.log(event)
    this.msg = event.target.value;
  }

}
