import { Routes } from '@angular/router';

import { Home} from './pages/home/home';
import { About} from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Certificates } from './pages/certificates/certificates';
import { Experience } from './pages/experience/experience';
import { Education } from './pages/education/education';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: Projects },
  { path: 'certificates', component: Certificates },
  { path: 'experience', component: Experience },
  { path: 'education', component: Education },
];
