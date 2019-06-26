import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Spell } from '../spell';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spell-filter',
  templateUrl: './spell-filter.component.html',
  styleUrls: ['./spell-filter.component.css']
})
export class SpellFilterComponent implements OnInit {

  @Input() filter : Spell;
  @Output() filtered = new EventEmitter();
  constructor(
    private spellService : SpellsService
  ) { }

  ngOnInit() {
    this.filter = {}
  }

  applyFilter()
  {
    this.spellService.setFilter(this.filter);
    this.filtered.emit();
  }

}
