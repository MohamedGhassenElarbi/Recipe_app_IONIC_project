import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdeaService, recipe } from 'src/app/services/idea.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  idea: recipe = {
    name: '',
    notes: '',
    imageUrl: ''
  };
  constructor(private activatedRoute: ActivatedRoute, private ideaService: IdeaService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.ideaService.getrecipe(id).subscribe(idea => {
        this.idea = idea;
      });
    }
  }
 
  addrecipe() {
    this.ideaService.addrecipe(this.idea).then(() => {
      this.router.navigateByUrl('/mes-recette');
      this.showToast('Recette ajoutée');
    }, err => {
      this.showToast('There was a problem adding your receipt :(');
    });
  }
 
  deleterecipe() {
    this.ideaService.deleterecipe(this.idea.id).then(() => {
      this.router.navigateByUrl('/ma-liste');
      this.showToast('Recette effacée');
    }, err => {
      this.showToast('There was a problem deleting your receipt :(');
    });
  }
 
  updaterecipe() {
    this.ideaService.updaterecipe(this.idea).then(() => {
      this.showToast('Recette mise a jour');
    }, err => {
      this.showToast('There was a problem updating your receipt :(');
    });
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
