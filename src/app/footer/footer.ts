import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly githubUrl = 'https://github.com/AleksejMosunov';
  protected readonly apiUrl = 'https://api.genratr.com';
}
