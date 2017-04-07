import{Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-media-popup',
  templateUrl: 'app/pop-item.component.html',
  styleUrls: ['app/pop-item.component.css']
})

export class PopItem{
  @Input() mediaItem;
  @Output() close=new EventEmitter();
  onClose(){
    this.close.emit(null);
  }
}