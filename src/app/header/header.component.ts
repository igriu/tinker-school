import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';

  constructor(private translateService: TranslateService,
    private localizeRouterService: LocalizeRouterService,
    private router: Router) {}

  ngOnInit(): void {
    this.translateService.use('ro')
    this.setCurrentUrl();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }


  changeLanguage(locale: string): void {
    this.translateService.use(locale);
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }


}
