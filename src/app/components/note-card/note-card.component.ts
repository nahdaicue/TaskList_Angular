import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import NoteResponse from '../../../models/NoteResponse';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  note = input<NoteResponse>();

  // Eventos de salida para que el componente padre
  // se encargue de la lógica de la API
  updateNote = output<NoteResponse>();
  deleteNote = output<number>();
}