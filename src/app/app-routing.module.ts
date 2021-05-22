import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import { DetalleExpertoComponent } from './components/detalle-experto/detalle-experto.component';
import { ExpertListaComponent } from './components/expert-lista/expert-lista.component';
import { FormComponent } from './components/form/form.component';
import { EtiquetasPageComponent } from './modules/etiquetas/etiquetas-page/etiquetas-page.component';
import { ExpertosPageComponent } from './modules/expertos/expertos-page/expertos-page.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';

const routes: Routes = [
  {
    path: '', // http:localhost:4200/
    pathMatch: 'full',
    redirectTo: '/login'
  },
  {
    path: 'login', // http:localhost:4200/login
    component: LoginPageComponent
  },
  {
    path: 'expertos', // http:localhost:4200/login
    component: ExpertosPageComponent
  },
  { path: 'expertos/page/:page', component: ExpertosPageComponent },
  {
    path: 'expertos/form', // http:localhost:4200/login
    component: FormComponent
  },
  { path: 'expertos/form/:id', component: FormComponent },

  {
    path: 'detalle/:id', // http:localhost:4200/login
    component: DetalleExpertoComponent
  },
  {
    path: 'etiquetas', // http:localhost:4200/login
    component: EtiquetasPageComponent
  },
  {
    path: 'etiquetas/form', // http:localhost:4200/login
    component: AddTareaComponent
  },
  {
    path: 'etiquetas/form/:id', // http:localhost:4200/login
    component: AddTareaComponent
  },


  {
    path: '**',
    component: ExpertosPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
