import {Component,OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES,ROUTER_PROVIDERS,Router,RouteParams} from '@angular/router-deprecated';
import {GetService} from './GetService';
import {LastComponent} from './LastComponent';


// MainComponent is Here

@Component({
  templateUrl: 'include/main.html',
  providers:[GetService],
  directives:[LastComponent,ROUTER_DIRECTIVES]
})
export class MainComponent implements OnInit{
  ax = true;
  keyy:string;
  constructor(private gs:GetService,private rp:RouteParams){}

  

  ngOnInit(){
    var plus:string;
    if(this.rp.get('sehi')){
      this.keyy = this.rp.get('key');
      plus='axtar='+this.keyy+',page='+this.rp.get('sehi');
      this.ax = false;
    }
    else{
      if(this.rp.get('seh')){
        plus='npage='+this.rp.get('seh');
        this.ax=true;
      }
      if(this.rp.get('key')){
        this.keyy = this.rp.get('key');
        plus = 'axtar='+this.rp.get('key');
        this.ax=false;
      }
    }
    
    
    this.gs.getData(plus);
  }
}