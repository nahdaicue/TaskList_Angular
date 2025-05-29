import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-note.component.html',
  styleUrl: './create-note.component.css',
})
export class CreateNoteComponent {
  //Variables
  noteTitle: string = '';

  //Constructor
  constructor(public noteService: NoteService) {}

  handleSubmit = () => {
    if (!this.noteTitle) return; //valida vacio

    this.noteTitle = this.noteTitle.trim(); //valida caracter en blanco
    if(this.noteTitle.length === 0){ 
      this.noteTitle = '';
    }

    const newNote: Note = {
      id: this.noteService.createId(),
      title: this.noteTitle,
      marked: false,
    };

    this.createNote(newNote);
  };

  //CREATE
  createNote(newNote: Note) {
    this.noteService.createNote(newNote).subscribe({
      next: () => {
        this.getNotes();
        this.noteTitle = '';
      },
      error: (e) => {
        console.log('error de createNote en create-note', e);
      },
    });
  }

  //GET
  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse(); //Para que aprescan arriba
      },
      error: (e) => {
        console.log('Error en getNotes');
      },
    });
  }
}
