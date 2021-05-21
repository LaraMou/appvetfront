import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//componentes

import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ExpertosPageComponent } from './modules/expertos/expertos-page/expertos-page.component';
import { ExpertTableComponent } from './components/expert-table/expert-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { EtiquetasTableComponent } from './components/etiquetas-table/etiquetas-table.component';
import {MatChipsModule} from '@angular/material/chips';
import { EtiquetasPageComponent } from './modules/etiquetas/etiquetas-page/etiquetas-page.component';
import { EliminarEtiquetaComponent } from './components/eliminar-etiqueta/eliminar-etiqueta.component';
import { ExpertListaComponent } from './components/expert-lista/expert-lista.component';
import { TareaListaComponent } from './components/tarea-lista/tarea-lista.component';
import { AddTareaComponent } from './components/add-tarea/add-tarea.component';
import { LoginPageComponent } from './modules/login-page/login-page.component';

import { DetalleExpertoComponent } from './components/detalle-experto/detalle-experto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,

    ExpertosPageComponent,
    ExpertTableComponent,
    EtiquetasPageComponent,
    EtiquetasTableComponent,
    ExpertListaComponent,
    TareaListaComponent,
    AddTareaComponent,
    LoginPageComponent,
    DetalleExpertoComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDialogModule,
    MatChipsModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
