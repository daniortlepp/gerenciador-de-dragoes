import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthenticationService } from '../../_services/authentication.service';
import { DragonsService } from '../../_services/dragons.service';

@Component({
  selector: 'app-dragons-form',
  templateUrl: './dragons-form.component.html',
  styleUrls: ['./dragons-form.component.css']
})
export class DragonsFormComponent implements OnInit {

  public dragonForm : FormGroup;
  id: number;
  submitted = false;

  constructor(private fb: FormBuilder,
    private authService: AuthenticationService,
    private dragonService: DragonsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Verifica se está logado. Se não, redireciona para a página de login
    this.authService.validateLogin();

    this.dragonForm = this.fb.group({
      createdAt: new Date(),
      name: [null],
      type: [null]
    });

    this.id = this.route.snapshot.params.id;
    if (this.id) {
        this.loadDragon(this.id);
    } 
  }

  // Getter para fácil acesso aos campos do formulário
  get f() { return this.dragonForm.controls; }

  // Método chamado para salvar os dados do formulário
  save() {
    this.submitted = true;

    if (this.dragonForm.invalid) {
      return;
    }

    if (!this.id) {
        this.add();
    }
    else {
        this.edit(this.id);
    }
    
  }

  // Método que carrega os dados do Dragão para edição
  loadDragon(id) {
    this.dragonService.getDragon(id).subscribe(
      data => {
        const response = (data as any);
        this.dragonForm.patchValue({'name': response.name});
        this.dragonForm.patchValue({'type': response.type});
      },
      error => {  
        alert(error.message);
      }
    );
  }

  // Método que adiciona um novo Dragão
  add() {
    let data = this.dragonForm.value;
    this.dragonService.add(data).subscribe(
      data => {
        const response = (data as any);
        this.router.navigateByUrl("/dragons/list");
      },
      error => {  
        alert(error.message);
      }
    );
  }

  // Método que edita um Dragão
  edit(id) {
    let data = this.dragonForm.value;
    this.dragonService.edit(data, id).subscribe(
      data => {
        const response = (data as any);
        this.router.navigateByUrl("/dragons/list");
      },
      error => {  
        alert(error.message);
      }
    );
  }

}
