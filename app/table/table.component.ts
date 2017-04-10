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
  role='';

  constructor(private playerService:PlayerService){}
  ngOnInit(){
      this.getPlayer(this.role);

  }

  getPlayer(role){
    this.role=role;
    this.playerService.get(role).subscribe(player=>{
        this.Players=player;
    });

  }
  
}