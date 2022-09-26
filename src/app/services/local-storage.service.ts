import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: Trainer;

  get user(): Trainer | undefined{
    return this._user;
  }

  set user(user: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, user!)
    this._user = user;
  }
  getUsername() {
    if(this._user !== undefined){
      return JSON.parse(sessionStorage.getItem('pokemon-trainer')!).username;
    }
  }

  getPokemons() {
    if(this._user !== undefined){
      return JSON.parse(sessionStorage.getItem('pokemon-trainer')!).pokemon;
    }
  }

  constructor() { 
    this._user = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)

  }
}
