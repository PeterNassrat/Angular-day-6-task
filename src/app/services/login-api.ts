import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { API_URLS } from '../constants/API_URLS';

@Injectable({
  providedIn: 'root'
})
export class LoginApi {
  private tokenKey = 'token';
  private userNameKey = 'username';

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(
      API_URLS.LOGIN, { username, password }
    ).pipe(
      tap((res: any) => {
        localStorage.setItem(this.tokenKey, res.accessToken);
        localStorage.setItem(this.userNameKey, res.firstName);
      })
    );
  }

  isLoggedIn() : boolean {
    if(localStorage.getItem(this.tokenKey)) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userNameKey);
  }
}
