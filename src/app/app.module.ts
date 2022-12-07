import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CourseSummaryComponent } from './course-summary/course-summary.component';
import { SalaryRoadComponent } from './salary-road/salary-road.component';
import { CourseAuthorComponent } from './course-author/course-author.component';
import { CourseFeedbackComponent } from './course-feedback/course-feedback.component';
import { CourseScheduleComponent } from './course-schedule/course-schedule.component';
import { CourseBenefitsComponent } from './course-benefits/course-benefits.component';
import { CourseCredibilityComponent } from './course-credibility/course-credibility.component';
import { CoursePerspectivesComponent } from './course-perspectives/course-perspectives.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './core/international/translate-browser.loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './core/international/localize-browser.loader';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    CourseSummaryComponent,
    SalaryRoadComponent,
    CourseAuthorComponent,
    CourseFeedbackComponent,
    CourseScheduleComponent,
    CourseBenefitsComponent,
    CourseCredibilityComponent,
    CoursePerspectivesComponent,
    FooterComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
