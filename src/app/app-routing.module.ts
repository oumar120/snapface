import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapeListComponent } from './face-snape-list/face-snape-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SigleFacesnapComponent } from './sigle-facesnap/sigle-facesnap.component';

const routes: Routes = [
  {path:'facesnaps',component:FaceSnapeListComponent},
  {path:'',component:LandingPageComponent},
  {path:'facesnaps/:id',component:SigleFacesnapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
