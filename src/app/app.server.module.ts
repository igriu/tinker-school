import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './core/international/translate-server.loader';
import { TransferState } from '@angular/platform-browser';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeServerLoaderFactory } from './core/international/localize-server.loader';
import { routes } from './app-routing.module';
import { Location } from '@angular/common';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeServerLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, TransferState],
      },
      initialNavigation: true,
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
