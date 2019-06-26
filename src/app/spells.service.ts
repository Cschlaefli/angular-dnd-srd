import { Injectable, Inject } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Spell, SpellResponse } from './spell';
import { Observable, of, from, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private spellUrl = 'spells';
  private spellFilter = '';
  private url = '';
  _observableSpells = new BehaviorSubject<object>({_meta : []});
  observableSpells: Observable<object>;
  constructor(
    @Inject(APP_BASE_HREF) private baseHref: string,
    private http: HttpClient,
    private messageService: MessageService
  ) {
  }

  private log(message: string) {
    this.messageService.add('SpellService : ' +  message);
  }

  public getUrl(page: number = 1): string {
    return this.baseHref + this.spellUrl + '?page=' + page + this.spellFilter;
  }

  public getSpells(page: number = 1): Observable<SpellResponse> {
    return this.http.get<SpellResponse>(this.getUrl(page));
  }

  public getSpell(id: string): Observable<Spell> {
    return this.http.get<Spell>(this.baseHref + this.spellUrl + '/' + id );
  }

  setFilter(filter: Spell) {
    let ret = '';
    let total_values = 0;
    for (const key in filter) {
      if (filter[key]) {
        if (total_values > 0) {
          ret += ',';
        }
        ret += '"' + key + '":' + filter[key];
        total_values += 1;
      }
    }
    if (ret != '') {
      this.spellFilter = '&where={' + ret + '}';
    } else {
      this.spellFilter = ret;
    }
    this.getSpells();
  }

  private handleError<T>(operation = 'operation', result?: T) {
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
