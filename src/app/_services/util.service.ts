import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() {}

  // Método que retorna a URL da api
  getEndPoint() {
        return "http://5c4b2a47aa8ee500142b4887.mockapi.io";
  }

}
