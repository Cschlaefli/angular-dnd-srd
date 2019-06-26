import { Component, OnInit } from '@angular/core';
import { Spell } from '../spell';
import { SpellsService} from '../spells.service';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  constructor(
    private spellService: SpellsService
  ) { }

  page = 1;
  pageSize: number;
  collectionSize: number;
  spells: Spell[];
  selectedSpell: Spell;

  ngOnInit() {
    this.getSpells(this.page);
  }

  reload() {
    this.getSpells(this.page);
  }
  loadPage(page) {
    this.getSpells(page);
  }

  getSpells(page): void {
    this.spellService.getSpells(page).subscribe( data => {
        this.spells = data._items,
        this.pageSize = data._meta.max_results,
        this.collectionSize = data._meta.total;
      },
      error => {
        console.log(error);
      });
  }

  onSelect(spell): void {
    this.selectedSpell = spell;
  }


}
