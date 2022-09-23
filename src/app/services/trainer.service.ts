import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { Observable, map, of, switchMap } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const  {apiTrainers, apiKey} = environment;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  //Dependency injecton. Injected http client into login service.
  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<Trainer>{
    return this.checkUsername(username).pipe(switchMap((response: Trainer | undefined) =>{
      if(response===undefined){
        return this.createUser(username)
      }
      return of(response)
    } )
    )
  }

  //Check if user exists
  private checkUsername(username: string): Observable<Trainer | undefined>{ //24.31
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`)
      .pipe(
        map((response: Trainer[])=> response.pop())
      )
  }

  //Create user if not exists
  private createUser(username: string): Observable<Trainer>{
    const user = {
      username,
      pokemon: []
    }

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    })
    return this.http.post<Trainer>(apiTrainers, user, {
      headers
    })
  }


}