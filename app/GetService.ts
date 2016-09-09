import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import './rxjsO';

@Injectable()
export class GetService{
  
  list:any;
  link = '/include/get.php?data=';
  video={};
  five=Array();
  total=Array();
  empty:boolean;
  
  constructor(private _http:Http){

  }
  
  public getData(plus:string=''){
    var aPromise = this._http.get(this.link+plus)
    .map((res:Response)=>res.json()).toPromise();
    var response:any;
    aPromise.then((data)=>{
      this.list=data.list;
      if(data.list.length==0)
        this.empty = true;
      else
        this.empty = false;
      console.log(data.list);
      for(var i=1;i<=Math.ceil(data.total/data.limit);i++){
        this.total.push(i);
      }
    });
    
  }

  getFive(link:string){
      var url = this.link+link;

      var promise = this._http.get(url).map(
        (response:Response)=>response.json().list
      ).toPromise();

      promise.then((data)=>{
        this.five = data;
      });
  }


  public getVideo(id:string){
    var aPromise = this._http.get(this.link+'id='+id).map(
      (response:Response)=>response.json().list).toPromise();
    
    aPromise.then((data)=>{
      this.video=data[0];
      document.title = data[0].title + " - Dubbing Show";
    });
    
  }
}