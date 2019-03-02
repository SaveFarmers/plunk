import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {UpgradeModule} from '@angular/upgrade/static';
//
import {AppModule} from './angular2/app';

//  We bootstrap the Angular 2 module first, and then, once it's done, bootstrap the Angular 1 module.
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['plunker'], {strictDi: true});
});
