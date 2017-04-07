import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { PopItemComponent } from "./pop-item.component";
import { ImageDirective } from "./image.directive";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    PopItemComponent,
    ImageDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}