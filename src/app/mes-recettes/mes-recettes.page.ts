import { Component, OnInit } from '@angular/core';
import { IdeaService, recipe } from 'src/app/services/idea.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mes-recettes',
  templateUrl: './mes-recettes.page.html',
  styleUrls: ['./mes-recettes.page.scss'],
})
export class MesRecettesPage implements OnInit {
  private ideas: Observable<recipe[]>;
  constructor(private ideaService: IdeaService) { }

  ngOnInit() {
    this.ideas = this.ideaService.getrecipes();
  }

}
