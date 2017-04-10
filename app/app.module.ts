import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, XHRBackend} from '@angular/http';
import { AppComponent } from './app/app.component';
import { AppTableComponent } from "./table/table.component";
import { AppDetailComponent } from "./detail/detail.component";
import { AppPlayerComponent } from "./player/player.component";
import { PlayerService } from "./player/player.service";
import { WinDirective } from "./detail/win.directive";
import { lookupListToken, lookupLists } from "./provider";
import { AppFormComponent } from "./Form/form.component";
import { MockXHRBackend} from './mock-xhr-backend';

@NgModule({
  imports:[
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    AppTableComponent,
    AppDetailComponent,
    AppPlayerComponent,
    WinDirective,
    AppFormComponent
  ],
  providers:[
    PlayerService,
    {provide: lookupListToken, useValue: lookupLists },
    {provide: XHRBackend,useClass:MockXHRBackend}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}