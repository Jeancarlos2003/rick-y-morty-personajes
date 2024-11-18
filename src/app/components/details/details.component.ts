import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  character: any; 

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number }, 
    private rickAndMortyService: RickAndMortyService
  ) {
    this.loadCharacterDetails();
  }

  
  loadCharacterDetails(): void {
    this.rickAndMortyService.getCharacterById(this.data.id).subscribe((character) => {
      this.character = character; 
    });
  }
}


