
import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from '../details/details.component'; 

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  characters: any[] = [];
  page: number = 1;

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.rickAndMortyService.getCharacters(this.page).subscribe((data) => {
      this.characters = data.results; 
    });
  }

  openDetails(id: number): void {
    this.dialog.open(DetailsComponent, {
      data: { id },
      width: '400px',
    });
  }

  changePage(next: boolean): void {
    this.page = next ? this.page + 1 : this.page - 1;
    this.loadCharacters();
  }
}
