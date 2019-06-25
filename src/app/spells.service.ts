import { Injectable, Inject } from '@angular/core';
import { MessageService } from './message.service' 
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Spell } from './spell'
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { APP_BASE_HREF } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private spellUrl = 'spells'
 
  constructor(
    @Inject(APP_BASE_HREF) private baseHref:string,
    private http : HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string){
    this.messageService.add('SpellService : ' +  message);
  }

  public getSpells(page : number = 1) : Observable<Object> {
    return this.http.get(this.baseHref + this.spellUrl + "?page=" + page) 
  }

  public getSpell(id : string) : Observable<Object> {
    return this.http.get(this.baseHref + this.spellUrl + "/" + id )
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
