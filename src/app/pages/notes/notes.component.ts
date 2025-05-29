import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NoteCardComponent, CreateNoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  //Variables
  hasError: boolean = false;
  isLoading: boolean = true;

  //Contructor
  constructor(public noteServices: NoteService) {}

  //OnInit
  ngOnInit(): void {
    this.getNotes();
  }

  //GET
  getNotes() {
    this.noteServices.getNotes().subscribe({
      next: (data) => {
        this.noteServices.notes = data.reverse(); //Para que aparezcan en orden de creación
        this.isLoading = false;
        this.hasError = false;
      },
      error: (e) => {
        console.log('Error en getNotes');
        this.hasError = true;
      },
    });
  }
}
