import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Spell } from '../spell';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spell-filter',
  templateUrl: './spell-filter.component.html',
  styleUrls: ['./spell-filter.component.css']
})
export class SpellFilterComponent implements OnInit {

  @Input() filter: Spell;
  @Output() filtered = new EventEmitter();
  levels = [
    {"name": "Any", "value": null},
    {"name": "Cantrip", "value" : 0 },
    {"name": "1st", "value" : 1 },
    {"name": "2nd", "value" : 2 },
    {"name": "3rd", "value" : 3 },
    {"name": "4th", "value" : 4 },
    {"name": "5th", "value" : 5 },
    {"name": "6th", "value" : 6 },
    {"name": "7th", "value" : 7 },
    {"name": "8th", "value" : 8 },
  ]
  constructor(
    private spellService: SpellsService
  ) { }

  ngOnInit() {
    this.filter = {};
  }

  applyFilter() {
    this.spellService.setFilter(this.filter);
    this.filtered.emit();
  }

}
