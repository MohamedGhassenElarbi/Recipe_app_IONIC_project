import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface recipe {
  id?: string,
  name: string,
  notes: string
  imageUrl: string
}
@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private recipes: Observable<recipe[]>;
  private recipeCollection: AngularFirestoreCollection<recipe>;
  constructor(private afs: AngularFirestore) {
    this.recipeCollection = this.afs.collection<recipe>('ideas');
    this.recipes = this.recipeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
   }

   getrecipes(): Observable<recipe[]> {
    return this.recipes;
  }
 
  getrecipe(id: string): Observable<recipe> {
    return this.recipeCollection.doc<recipe>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }
 
  addrecipe(idea: recipe): Promise<DocumentReference> {
    return this.recipeCollection.add(idea);
  }
 
  updaterecipe(idea: recipe): Promise<void> {
    return this.recipeCollection.doc(idea.id).update({ name: idea.name, notes: idea.notes,imageUrl: idea.imageUrl });
  }

  deleterecipe(id: string): Promise<void> {
    return this.recipeCollection.doc(id).delete();
  }
}
