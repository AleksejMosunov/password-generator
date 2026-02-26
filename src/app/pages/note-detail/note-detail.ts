import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../../services/note-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css',
})
export class NoteDetail {
  noteId!: number;
  note: any;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
  ) {
    this.route.params.subscribe((params) => {
      this.noteId = +params['id'];
      this.note = this.noteService.getNotes().find((note) => note.id === this.noteId);
    });
  }
}
