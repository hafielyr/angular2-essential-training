import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'mw-pop-item',
  templateUrl: 'app/pop-item.component.html',
  styleUrls: ['app/pop-item.component.css']
})

export class PopItemComponent{
  @Input() imgIndex=0;
  @Input() mediaItem;
  @Output() closePop=new EventEmitter();

  closepop(){
    this.closePop.emit(null);
  }
  onnext(){
    this.mediaImages[this.imgIndex].visibility=false;
    if(this.imgIndex<this.mediaImages.length-1){
    this.imgIndex=this.imgIndex+1;
    }
    else{
      this.imgIndex=0;
    }
    this.mediaImages[this.imgIndex].visibility=true;
  }
  onprev(){
    this.mediaImages[this.imgIndex].visibility=false;
    if(this.imgIndex>0){
    this.imgIndex=this.imgIndex-1;
    }
    else{
      this.imgIndex=this.mediaImages.length-1;
    }
    this.mediaImages[this.imgIndex].visibility=true;
  }
  mediaImages=[{
    path: "../media/01.png",
    visibility: true},
    {path: "../media/02.png",
    visibility: false},
    {path: "../media/03.png",
    visibility: false},
    {path: "../media/04.png",
    visibility: false}
  ];

}