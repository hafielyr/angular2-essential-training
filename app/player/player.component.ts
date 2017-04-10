import{ Component,Input,Output,EventEmitter } from '@angular/core';
import{PlayerService} from '../player/player.service';

@Component({
  selector: 'app-player',
  templateUrl: 'app/player/player.component.html',
  styleUrls:['app/player/player.component.css']
})

export class AppPlayerComponent{
@Input() player;
@Output() detailPlayer=new EventEmitter();

constructor(private playerService:PlayerService){}

showDetail(){
  this.detailPlayer.emit(this.player);
  this.playerService.setPlayer(this.player);
}

}