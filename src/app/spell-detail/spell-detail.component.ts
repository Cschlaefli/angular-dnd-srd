import { Component, OnInit, Input } from '@angular/core';
import { Spell} from "../spell"
import { ActivatedRoute } from '@angular/router';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spell-detail',
  templateUrl: './spell-detail.component.html',
  styleUrls: ['./spell-detail.component.css']
})
export class SpellDetailComponent implements OnInit {

  @Input() spell : Spell;

  constructor(
    private route : ActivatedRoute,
    private spellService : SpellsService
  ) { }

  ngOnInit() {
  }
  
  getSpell(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.spellService.getSpell(id)
      .subscribe(s => this.spell = s['data']);
  }

}
