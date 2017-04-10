import{ Component,Input,Output,EventEmitter } from '@angular/core';
import{PlayerService} from '../player/player.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'app/detail/detail.component.html',
  styleUrls:['app/detail/detail.component.css']
})

export class AppDetailComponent{
  @Input() playerDetail;
  constructor(private playerService:PlayerService){}

}