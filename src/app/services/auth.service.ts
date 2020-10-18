import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces';
import { tap } from 'rxjs/operators'
import { ThrowStmt } from '@angular/compiler';


@Injectable({providedIn: 'root'})

export class AuthService {

  private token = null
  constructor(private http : HttpClient) {

  }
  registr() {

  }


  login(user: User) : Observable<{token: string}> {


    // return this.http.get<{}>('/api/v1.0/health-check')
    return this.http.post<{token: string}>('/api/v1.0/auth/login',
    user
    )
    .pipe(
      tap(({token})=> {
        localStorage.setItem('auth-token', token)
        this.setToken(token)
      })
    )
  }

  setToken(token: string) {
    this.token = token
  }

  getToken() : string {
    return this.token
  }

  isAuthenticated() {
    return !! this.token
  }

  logout() {
    console.log('logout')
    this.setToken(null)
    localStorage.clear()
  }
}
