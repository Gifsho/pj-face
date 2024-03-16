import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ToptenComponent } from './components/topten/topten.component';


export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "posts", component: PostsComponent },
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent },
    { path: "topten", component: ToptenComponent},
    { path: "**", redirectTo: "" },
];
