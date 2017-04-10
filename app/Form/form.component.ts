import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { PlayerService } from '../player/player.service';
import { lookupListToken} from '../provider';

@Component({
  selector: 'app-form',
  templateUrl: 'app/form/form.component.html',
  styleUrls: ['app/form/form.component.css']
})
export class AppFormComponent {
  form;
  index=6;
  constructor(
    private formBuilder: FormBuilder,
    private playerService: PlayerService,
    @Inject(lookupListToken) public lookupLists) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      
      photo: this.formBuilder.control('../media/01.png'),
      nick: this.formBuilder.control(''),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      team: this.formBuilder.control(''),
      role: this.formBuilder.control('Position1'),
      winTI: this.formBuilder.control(''),
      age: this.formBuilder.control('', this.ageValidator),
    });
  }

  ageValidator(control) {
    if (control.value.trim().length === 0) {
      return null;
    }
    let year = parseInt(control.value);
    let minYear = 10;
    let maxYear = 70;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'age': {
          min: minYear,
          max: maxYear
        }
      };
    }
  }

  onSubmit(player) {
    this.playerService.add(player).subscribe();
    this.index+=1;
  }
}
