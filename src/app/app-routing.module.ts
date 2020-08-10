import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainsceneComponent } from "./components/mainscene/mainscene.component";

const routes: Routes = [
  { path: "", redirectTo: "/general", pathMatch: "full" },
  { path: ":category", component: MainsceneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
