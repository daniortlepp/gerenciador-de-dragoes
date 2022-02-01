import { NgStyle } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../_services/authentication.service';
import { DragonsService } from '../../_services/dragons.service';

@Component({
  selector: 'app-dragons-details',
  templateUrl: './dragons-details.component.html',
  styleUrls: ['./dragons-details.component.css']
})
export class DragonsDetailsComponent implements OnInit {

  id: number;
  dragon: any;

  constructor(private authService: AuthenticationService,
    private dragonService: DragonsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Verifica se está logado. Se não, redireciona para a página de login
    this.authService.validateLogin();

    this.id = this.route.snapshot.params.id;
    if (this.id) {
        this.loadDragon(this.id);
    } 
  }

  // Método que carrega os dados de um Dragão para visualização
  loadDragon(id) {
    this.dragonService.getDragon(id).subscribe(
      data => {
        const response = (data as any);
        this.dragon = response;
      },
      error => {  
        alert(error.message);
      }
    );
  }

}
