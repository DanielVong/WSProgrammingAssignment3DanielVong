import { Routes } from '@angular/router';
import {Home} from "./pages/home/home";
import {Assignments} from "./pages/assignments/assignments";
export const routes: Routes = [
    {path:'home', component:Home},
    {path:'assignments', component:Assignments},
    {path:'',component:Home}
];
