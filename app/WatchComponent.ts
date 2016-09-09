import {Component,OnInit} from '@angular/core';
import {GetService} from './GetService';
import {LastComponent} from './LastComponent';
import {RouteParams} from '@angular/router-deprecated'

@Component({
  templateUrl: 'include/watch.html',
  providers:[GetService],
  directives:[LastComponent]
})
export class WatchComponent implements OnInit{
  video={};
  constructor(private gs:GetService,private rp:RouteParams){
    
  }
  ngOnInit(){
    
    this.gs.getVideo(this.rp.get('id'));
  }
}