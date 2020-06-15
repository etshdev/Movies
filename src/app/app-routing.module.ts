import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth.guard';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'',redirectTo:"login" ,pathMatch:'full'},
  {path:'TrendingMovies', canActivate:[AuthGuard], component:TrendingMoviesComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LogInComponent},
  {path:'MovieDetails/:id',canActivate:[AuthGuard],component:MovieDetailsComponent},
  {path:'**' , component:NotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
