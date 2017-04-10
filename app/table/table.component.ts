import{ Component,Input,Output,EventEmitter } from '@angular/core';
import{PlayerService} from '../player/player.service';

@Component({
  selector: 'app-table',
  templateUrl: 'app/table/table.component.html',
  styleUrls:['app/table/table.component.css']
})

export class AppTableComponent{
  @Input() player;
  Players;
  @Output() playerInfo=new EventEmitter();

  constructor(private playerService:PlayerService){}
  ngOnInit(){
    this.Players= this.playerService.get().subscribe(Players=>{
      this.Players=Players;
    });

  }

  getDetailPlayer(player){
    this.player=player;
    this.playerInfo.emit(this.player);
  }
  
}