import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {


public recetteList: any[];
public loadedrecetteList: any[];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection(`ideas`).valueChanges()
      .subscribe(Idea => {
        this.recetteList = Idea;
        this.loadedrecetteList = Idea;
    });
  }

  initializeItems(): void {
    this.recetteList = this.loadedrecetteList;
  }

  filterList(evt) {
    this.initializeItems();
  
    
    const searchTerm = evt.srcElement.value;
    
  
    if (!searchTerm) {
      return;
    }
  
    this.recetteList = this.recetteList.filter(Idea=> {
      if (Idea.name && searchTerm) {
        if (Idea.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
      
    });
  }

  

}
