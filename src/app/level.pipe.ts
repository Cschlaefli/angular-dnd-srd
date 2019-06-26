import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'spellLevel'})
export class SpellLevel implements PipeTransform {
  transform(value: string): string {
      switch (value.toString().trim()) {
          case '0': return 'Cantrip';
          case '1': return '1st Level';
          case '2': return '2nd Level';
          case '3': return '3rd Level';
          default : return value + 'th Level';
      }
  }
}
