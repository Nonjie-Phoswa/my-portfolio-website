import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProjectsComponent } from './pages/projects/projects';
import { CertificatesComponent } from './pages/certificates/certificates';
import { ExperienceComponent } from './pages/experience/experience';
import { EducationComponent } from './pages/education/education';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'certificates', component: CertificatesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'education', component: EducationComponent },
];
