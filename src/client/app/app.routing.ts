import { Routes } from '@angular/router';

import { LoadingComponent } from './db-loading/db-loading.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
    {
        path: '',
        component: LoadingComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    }
];
