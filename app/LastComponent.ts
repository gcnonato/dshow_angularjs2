import {Component,OnInit} from '@angular/core';
import {RouteParams,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {GetService} from './GetService';

@Component({
    selector:'last-com',
    templateUrl:'include/last.html' ,
    providers:[GetService],
    directives:[ROUTER_DIRECTIVES]
  
})
export class LastComponent implements OnInit{
  constructor(private gs:GetService,private rp:RouteParams){}

  ngOnInit(){
      var link:string;
      if(this.rp.get('id')!=null){
          link = 'limit=5';
      }
      else{
          link = 'limit=5,sort=visited';
      }
    this.gs.getFive(link);
  }
}