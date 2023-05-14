import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {CategoriesComponent} from "./features/categories/categories.component";
import {FlashCardsComponent} from "./features/flash-cards/flash-cards.component";

const routes: Routes = [
  {path: '', pathMatch: "full", redirectTo: 'categories'},
  {path: 'categories', component: CategoriesComponent},
  {path: 'flash-cards', component: FlashCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
