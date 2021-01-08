import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces';
import { tap } from 'rxjs/operators'
import { ThrowStmt } from '@angular/compiler';
import { MapService } from './map.service';
import { environment } from '../../environments/environment'


@Injectable({providedIn: 'root'})

export class AuthService {

  private token = null
  constructor(private http : HttpClient, private mapService : MapService) {

  }
  registr(user: User) {



  }


  login(user: User) : Observable<{token: string, userId: string}> {


    // return this.http.get<{}>('/api/v1.0/health-check')
    return this.http.post<{token: string, userId : string}>(`${environment.apiUrl}/api/v1.0/auth/login`,
    user
    )
    .pipe(
      tap(({token, userId})=> {
        this.mapService.userId = userId
        console.log(this.mapService)
        localStorage.setItem('user-id', userId)
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

    return !! localStorage.getItem('auth-token')
  }

  logout() {
    console.log('logout')
    this.setToken(null)
    localStorage.clear()
  }

  setUserId() {
    this.mapService.userId = localStorage.getItem('user-id')
  }

}
