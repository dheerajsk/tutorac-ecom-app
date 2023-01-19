import { AppModule } from './app/app.module';
import { CartModule } from './app/cart/cart.module';
import { HomeModule } from './app/home/home.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
