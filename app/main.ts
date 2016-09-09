import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {AppComponent} from './AppComponent';
import {enableProdMode} from '@angular/core';

enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS,ROUTER_PROVIDERS]);