import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { MessagesComponent } from './messages/messages.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    MessagesComponent,
    SpellDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ {provide : APP_BASE_HREF, useValue : 'http://li966-183.members.linode.com/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
