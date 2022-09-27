import { Injectable } from '@angular/core';
import { Trainer } from '../models/trainer.model';
import { Observable, map, of, switchMap, tap, finalize, Subject, BehaviorSubject } from 'rxjs'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StorageUtil } from '../utils/storage.util';
import { Router } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { StorageKeys } from '../enums/storage-keys.enum';



const { apiTrainers, apiKey } = environment;


@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  //Dependency injecton. Injected http client into login service.
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router) {
      this.trainer = StorageUtil.storageRead(StorageKeys.Trainer);
    }

  private _trainer$ = new BehaviorSubject<Trainer | undefined>(undefined);

  get trainer$(): Observable<Trainer | undefined> {
    return this._trainer$.asObservable();
  }

  get trainer(): Trainer | undefined {
    return this._trainer$.value;
  }

  set trainer(newTrainer: Trainer | undefined) {
    this._trainer$.next(newTrainer);
    StorageUtil.storageSave<Trainer | undefined>(StorageKeys.Trainer, newTrainer);
  }

  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username)
      .pipe(
        switchMap((response: Trainer | undefined) => {
          if (response === undefined) {
            return this.createUser(username)
          }
          return of(response)
        })
      )
  }

  public logout() {
    StorageUtil.storageDelete<Trainer>()
    this.trainer = undefined;
    this.router.navigateByUrl("/login")
  }

  public collectPokemon(pokemon: Pokemon, callBack: () => void) {
    let trainer = this._trainer$.value;
    if (!trainer) {
      return
    }

    if (trainer.pokemon.some((collectedPokemon) => collectedPokemon.id === pokemon.id)) {
      console.log("Exists already")
      alert(`${pokemon.name} is already captured.`)
      return
    }
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    })
    this.http.patch<Trainer>(`${apiTrainers}/${trainer.id}`, {
      ...trainer,
      pokemon: [...trainer.pokemon, pokemon]
    }, {
      headers: headers
    })
      .pipe(
        finalize(callBack),
      )
      .subscribe({
        next: (newTrainer) => {
          this._trainer$.next(newTrainer);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.message);
        }
      }
      )
  }

  //Check if user exists
  private checkUsername(username: string): Observable<Trainer | undefined> { //24.31
    return this.http.get<Trainer[]>(`${apiTrainers}?username=${username}`)
      .pipe(
        map((response: Trainer[]) => response.pop())
      )
  }

  //Create user if not exists
  private createUser(username: string): Observable<Trainer> {
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
