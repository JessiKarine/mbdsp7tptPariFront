import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PariComponent } from './pari/pari.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ResultatComponent } from './resultat/resultat.component';
import { MatchComponent } from './widgets/match/match.component';
import { PartenairesSportifComponent } from './widgets/partenaires-sportif/partenaires-sportif.component';
import { ParisEnDirecteComponent } from './widgets/paris-en-directe/paris-en-directe.component';
import { HtmlrenderPipe } from './pipe/htmlrender.pipe';
import { MatchParCategorieComponent } from './widgets/match-par-categorie/match-par-categorie.component';

const routes:Routes = [
  {
    // indique que http://localhost:4200 sans rien ou avec un "/" à la fin
    // doit afficher le composant AssignmentsComponent (celui qui affiche la liste)
    path:"",
    component: PariComponent
  },
  {
    path:"resultat",
    component:ResultatComponent
  },
  {
    path:"calendrier",
    component:CalendrierComponent
  },/*
  {
    path:"add",
    component:AddAssignmentComponent
  },
  {
    path:"assignment/:id",
    component:AssignmentDetailComponent
  },
  {
    path:"assignment/:id/edit",
    component:EditAssigmentComponent,
    canActivate : [AuthGuard]
  }*/
]
@NgModule({
  declarations: [
    AppComponent,
    PariComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CalendrierComponent,
    ResultatComponent,
    MatchComponent,
    PartenairesSportifComponent,
    ParisEnDirecteComponent,
    HtmlrenderPipe,
    MatchParCategorieComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
