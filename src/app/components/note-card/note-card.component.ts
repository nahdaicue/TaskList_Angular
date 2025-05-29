import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-card',
  imports: [FormsModule, CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  note = input<Note>();

  constructor(public noteService: NoteService) {}

  updateTitle(id: string | undefined, e: Event) {
    if (!id) return; //si da false sale de la función

    const inputHtml = e.target as HTMLInputElement; //Convertir dato para que no salga error

    this.noteService.updateTitle(id, inputHtml.value);
  }

  updateMarked(id: string | undefined) {
    if (!id) return; //si da false sale de la función

    this.noteService.updateMarked(id);
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id).subscribe({
      next: () => {
        console.log(id + ' elimiando');
        this.getNotes();
      },
      error(e) {
        console.log('No se pudo eliminar el id: ' + id + ' Error: ' + e);
      },
    });
  }

  getNotes() {
    this.noteService.getNotes().subscribe({
      next: (data) => {
        this.noteService.notes = data.reverse(); //Para que aparezcan en orden de creación
      },
      error: (e) => {
        console.log('Error en getNotes de note-card');
      },
    });
  }

  saveNote() {
    const currentNote = this.note();

    if (!currentNote || !currentNote.id || currentNote.marked) return;

    currentNote.title = currentNote.title.trim();
    if (currentNote.title.length === 0) {
      currentNote.title = '';
      return;
    }

    this.noteService.updateNote(currentNote).subscribe({
      next: () => {
        console.log('Nota actualizada correctamente');
      },
      error: (e) => {
        console.error('Error al actualizar la nota:', e);
      },
    });
  }
}
