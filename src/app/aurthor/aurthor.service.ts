import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AurthorService {

  constructor() { }

  getAurthors():string[]{
    return ["aurthor1","aurthor2","aurthor3"]
  }
}
