import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { env } from 'process';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  private apiUrl = 'https://api.genratr.com/';
  // private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  generatePassword(
    length = 12,
    lowercase = true,
    uppercase = true,
    numbers = true,
    special = true,
  ): Observable<{ password: string }> {
    const headers = new HttpHeaders({
      // 'X-Api-Key': this.apiKey,
    });

    const params: any = { length };

    if (lowercase) params.lowercase = '';
    if (uppercase) params.uppercase = '';
    if (numbers) params.numbers = '';
    if (special) params.special = '';

    return this.http.get<{ password: string }>(this.apiUrl, { headers, params }).pipe(
      tap((res) => {
        console.log('API response in service:', res);
      }),
    );
  }
}
