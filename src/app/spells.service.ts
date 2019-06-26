import { Injectable, Inject } from '@angular/core';
import { MessageService } from './message.service' 
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Spell } from './spell'
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private spellUrl = 'spells'
  private spellFilter = "";
  private url = "";
  _observableSpells = new BehaviorSubject<Object>({"_meta" : []});
  observableSpells : Observable<Object>;
  constructor(
    @Inject(APP_BASE_HREF) private baseHref:string,
    private http : HttpClient,
    private messageService: MessageService
  ) {
  }

  private log(message: string){
    this.messageService.add('SpellService : ' +  message);
  }

  public getUrl(page : number = 1) : string {
    return this.baseHref + this.spellUrl + "?page=" + page + this.spellFilter;
  }

  public getSpells(page : number = 1) : Observable<Object> {
    return this.http.get(this.getUrl());
  }

  public getSpell(id : string) : Observable<Object> {
    return this.http.get(this.baseHref + this.spellUrl + "/" + id )
  }

  setFilter(filter : Spell){
    var ret = "";
    var total_values = 0;
    for (let key in filter)
    {
      if (filter[key]){
        if (total_values > 0) 
          ret += ',';
        ret += '"' + key +'":' + filter[key];
        total_values += 1;
      }
    }
    if (ret != "")
      this.spellFilter = "&where={" + ret + "}";
    else
      this.spellFilter = ret;
    this.getSpells()
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
