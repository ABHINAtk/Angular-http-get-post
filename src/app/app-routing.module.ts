import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateRecordComponent } from './create-record/create-record.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

const routes: Routes = [
  {path:'',component:CreateRecordComponent},
  {path:'users/:id',component:ShowDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
