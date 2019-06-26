import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { MessagesComponent } from './messages/messages.component';
import { SpellDetailComponent } from './spell-detail/spell-detail.component';
import { SpellLevel } from './level.pipe';
import { SpellFilterComponent } from './spell-filter/spell-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    SpellListComponent,
    MessagesComponent,
    SpellDetailComponent,
    SpellLevel,
    SpellFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ {provide : APP_BASE_HREF, useValue : 'http://li966-183.members.linode.com/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
