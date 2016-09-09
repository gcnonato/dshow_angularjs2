import {Component,OnInit} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,ROUTER_PROVIDERS,RouteParams,Router} from '@angular/router-deprecated';
import {InfoComponent} from './InfoComponent';
import {MainComponent} from './MainComponent';
import {WatchComponent} from './WatchComponent';


@Component({
  selector: 'main-app',
  templateUrl: 'app/app.html',
  directives:  [ROUTER_DIRECTIVES,WatchComponent]
})
@RouteConfig([
  {path:'/bax/:id',component:WatchComponent,name:'Watch'},
  {path:'/haqqimizda',component:InfoComponent,name:'Info'},
  {path:'/axtar/:key',component:MainComponent,name:'Search'},
  
  {path:'/axtar/:key/:sehi',component:MainComponent,name:'SearchPlus'},
  {path:'/sehife/:seh',component:MainComponent,name:'Page'},
  {path:'/',component:MainComponent,name:'Main'}

])
export class AppComponent implements OnInit{
  constructor(private ro:Router){

  }
  data = "";
  tema(){
    this.ro.navigate(['Search',{key:this.data}]);
  }
  ngOnInit(){
    
  }
}