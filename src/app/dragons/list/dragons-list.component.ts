import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../_services/authentication.service';
import { DragonsService } from '../../_services/dragons.service';

@Component({
  selector: 'app-dragons-list',
  templateUrl: './dragons-list.component.html',
  styleUrls: ['./dragons-list.component.css']
})
export class DragonsListComponent implements OnInit {

  public dragonsList:any = [];

  constructor(private authService: AuthenticationService, private dragonService: DragonsService) { }

  ngOnInit() {
    // Verifica se está logado. Se não, redireciona para a página de login
    this.authService.validateLogin();

    this.listAll();
  }

  // Método que lista todos os Dragões salvos
  listAll() {
    this.dragonService.listAll().subscribe(
      data => {
        const response = (data as any);
        response.sort((a,b) => a.name.localeCompare(b.name));
        this.dragonsList = response;
      },
      error => {  
        alert(error.message);
      }
    );
  }

  // Método que exclui um dragão
  delete(id) {
    if (confirm('Deseja excluir esse Dragão?')) {
      this.dragonService.delete(id).subscribe(
        data => {
          const response = (data as any);
          alert('O Dragão foi excluído com sucesso');
          this.listAll();
        },
        error => {  
          alert(error.message);
          console.log('error');
          console.log(error);
        }
      );
    }
  }

}
