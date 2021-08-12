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
import { PariComponent } from './pages/pari/pari.component';
import { HeaderComponent } from './widgets/header/header.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { MenuComponent } from './widgets/menu/menu.component';
import { MatchComponent } from './widgets/match/match.component';
import { PartenairesSportifComponent } from './widgets/partenaires-sportif/partenaires-sportif.component';
import { ParisEnDirecteComponent } from './widgets/paris-en-directe/paris-en-directe.component';
import { HtmlrenderPipe } from './pipe/htmlrender.pipe';
import { MatchParCategorieComponent } from './widgets/match-par-categorie/match-par-categorie.component';
import { CalendrierComponent } from './pages/calendrier/calendrier/calendrier.component';
import { AboutComponent } from './pages/about/about/about.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { CalendrierFicheComponent } from './pages/calendrier/calendrier-fiche/calendrier-fiche.component';
import { ResultatParCategorieComponent } from './widgets/resultat-par-categorie/resultat-par-categorie.component';
import { PubBannerComponent } from './widgets/banner/pub-banner/pub-banner.component';
import { CarouselBannerComponent } from './widgets/banner/carousel-banner/carousel-banner.component';
import { InscriptionComponent } from './widgets/inscription/inscription.component';
import { ButtonComponent } from './widgets/ui/button/button.component';

const routes:Routes = [
  {
    // indique que http://localhost:4200 sans rien ou avec un "/" à la fin
    // doit afficher le composant AssignmentsComponent (celui qui affiche la liste)
    path:"",
    component: PariComponent
  },
  {
    path:"calendrier",
    component:CalendrierComponent
  },{
    path:"about",
    component:AboutComponent
  },
  {
    path:"contact",
    component:ContactComponent
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
    MatchComponent,
    PartenairesSportifComponent,
    ParisEnDirecteComponent,
    HtmlrenderPipe,
    MatchParCategorieComponent,
    CalendrierComponent,
    AboutComponent,
    ContactComponent,
    CalendrierFicheComponent,
    ResultatParCategorieComponent,
    PubBannerComponent,
    CarouselBannerComponent,
    InscriptionComponent,
    ButtonComponent],
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
