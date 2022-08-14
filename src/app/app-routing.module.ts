import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { NewStoryComponent } from './new-story/new-story.component';
const routes: Routes = [
  {path: 'stories', component: StoriesComponent},
  {path: 'new-story', component: NewStoryComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
