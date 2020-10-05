import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { AboutComponent } from '../contents/about/about.component'
import { AwardComponent } from '../contents/award/award.component'
import { CertComponent } from '../contents/cert/cert.component'
import { EduComponent } from '../contents/edu/edu.component'
import { ExprComponent } from '../contents/expr/expr.component'
import { SkillComponent } from '../contents/skill/skill.component'
import { VolunteerComponent } from '../contents/volunteer/volunteer.component'

export const ROUTES:Routes = [
  { path: '', component: AboutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'award', component: AwardComponent},
  { path: 'cert', component: CertComponent},
  { path: 'edu', component: EduComponent},
  { path: 'expr', component: ExprComponent},
  { path: 'skill', component: SkillComponent},
  { path: 'volunteer', component: VolunteerComponent},
]

@NgModule({
  declarations: [
    AboutComponent,
    AwardComponent,
    CertComponent,
    EduComponent,
    ExprComponent,
    SkillComponent,
    VolunteerComponent
  ],
  imports: [
	  CommonModule,RouterModule.forChild(ROUTES)
  ]
})
export class ViewModule { }
