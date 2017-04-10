import {Injectable} from '@angular/core';
import {Http,URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService{

constructor(private http:Http){}

playerInfo;
get(){
  return this.http.get('players').map(response=>{
    return response.json().players;
  });
}

add(player){
  
  return this.http.post('players',player).map(respons=>{});
}

setPlayer(player){
  this.playerInfo=player;
  console.log("set"+this.playerInfo);
}

getPlayer(){
  console.log(this.playerInfo);
  return this.playerInfo;
  
}


}