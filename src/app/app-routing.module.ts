import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login';
import { DragonsListComponent, DragonsFormComponent, DragonsDetailsComponent } from './dragons';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: DragonsListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dragons/register', component: DragonsFormComponent },
    { path: 'dragons/edit/:id', component: DragonsFormComponent },
    { path: 'dragons/details/:id', component: DragonsDetailsComponent },

    // otherwise redirect to dragons list
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
