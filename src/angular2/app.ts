import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {UpgradeModule} from '@angular/upgrade/static';
//
import {AppComponent} from './component';

@NgModule({
  imports: [ BrowserModule, UpgradeModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  ngDoBootstrap() {}
}
