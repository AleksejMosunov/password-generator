import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'notes',
    loadComponent: () => import('./pages/note/note').then((m) => m.NoteComponent),
  },
  {
    path: 'notes/:id',
    loadComponent: () => import('./pages/note-detail/note-detail').then((m) => m.NoteDetail),
  },
  {
    path: 'password-generator',
    loadComponent: () =>
      import('./pages/password-generator/password-generator').then(
        (m) => m.PasswordGeneratorComponent,
      ),
  },
  {
    path: 'to-do',
    loadComponent: () => import('./pages/to-do/to-do').then((m) => m.ToDo),
  },
];
