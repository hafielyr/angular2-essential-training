import {Pipe} from '@angular/core';

@Pipe({
  name: 'dash'
})
export class DashPipe{
  transform(nick){
    return nick.replace('/\w\S*/g', function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}