import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ApplicationListComponent } from '../application-list/application-list.component';
import { BlogComponent } from '../blog/blog.component';
import { BrowseCompaniesComponent } from '../browse-companies/browse-companies.component';
import { BrowseJobSeekerComponent } from '../browse-job-seeker/browse-job-seeker.component';
import { CompanySignUpComponent } from '../company-sign-up/company-sign-up.component';
import { CompanySpontaniousApplicationComponent } from '../company-spontanious-application/company-spontanious-application.component';
import { LayoutComponent } from '../Components/layout/layout.component';
import { ContactComponent } from '../contact/contact.component';
import { FriendListComponent } from '../friend-list/friend-list.component';
import { GetQuestionsComponent } from '../get-questions/get-questions.component';
import { GetTestComponent } from '../get-test/get-test.component';
import { JobApplicationDetailComponent } from '../job-application-detail/job-application-detail.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { JobGateServicesComponent } from '../job-gate-services/job-gate-services.component';
import { JobSeekerSignUpComponent } from '../job-seeker-sign-up/job-seeker-sign-up.component';
import { JobComponent } from '../job/job.component';
import { LoginComponent } from '../login/login.component';
import { PostJobComponent } from '../post-job/post-job.component';
import { ProfileAboutComponent } from '../profile-about/profile-about.component';
import { ProfileContenetComponent } from '../profile-contenet/profile-contenet.component';
import { ProfileEventsComponent } from '../profile-events/profile-events.component';
import { ProfileSettingsEductionsComponent } from '../profile-settings-eductions/profile-settings-eductions.component';
import { ProfileSettingsComponent } from '../profile-settings/profile-settings.component';
import { ProfileComponent } from '../profile/profile.component';
import { PublicProfileAboutComponent } from '../public-profile-about/public-profile-about.component';
import { PublicProfileCompanyEventsComponent } from '../public-profile-company-events/public-profile-company-events.component';
import { PublicProfileCompanyJobsComponent } from '../public-profile-company-jobs/public-profile-company-jobs.component';
import { PublicProfileHomeComponent } from '../public-profile-home/public-profile-home.component';
import { PublicProfileComponent } from '../public-profile/public-profile.component';
import { ReceptionComponent } from '../reception/reception.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { SpontaniousApplicationComponent } from '../spontanious-application/spontanious-application.component';
import { HomeComponent } from './home.component';


const routes: Routes = [{ path: '', component: HomeComponent,children:[
  {path:'',component:LayoutComponent},
  {path:'Layout',component:LayoutComponent},
  {path:'Login',component:LoginComponent},
  {path:'Blog',component:BlogComponent},
  {path:'BrowseCompanies',component:BrowseCompaniesComponent},
  {path:'BrowseJobSeeker',component:BrowseJobSeekerComponent},
  {path:'JobGateServices',component:JobGateServicesComponent},
  {path:'Reception',component:ReceptionComponent},
  {path:'Contact',component:ContactComponent},
  {path:'PublicProfile/:Id/:Role',component:PublicProfileComponent,children:[
    {path:'',component:PublicProfileHomeComponent},
    {path:'PublicProfileHome',component:PublicProfileHomeComponent},
    {path:'Spontanious',component:SpontaniousApplicationComponent},
    {path:'PublicProfileAbout',component:PublicProfileAboutComponent},
    {path:'PublicProfileCompanyJobs',component:PublicProfileCompanyJobsComponent},
    {path:'PublicProfileCompanyEvents',component:PublicProfileCompanyEventsComponent},
    
    

  ]},
  {path:'SignUp',component:SignUpComponent,children:[
    {path:'',component:JobSeekerSignUpComponent},
    {path:'JobSeekerSignUp',component:JobSeekerSignUpComponent},
    {path:'CompanySignUp',component:CompanySignUpComponent}
  ]},
  {path:'About',component:AboutComponent},
  {path:'JobApplicationDetail/:Id',component:JobApplicationDetailComponent},
  {path:'Profile',component:ProfileComponent,children:[
    {path:'',component:ProfileContenetComponent},
    {path:'ProfileContenent',component:ProfileContenetComponent},
    {path:'About',component:ProfileAboutComponent},
    {path:'PostJob',component:PostJobComponent},
    {path:'Job',component:JobComponent},
    {path:'JobDetail/:Id',component:JobDetailComponent},
    {path:'FriendList',component:FriendListComponent},
    {path:'ApplicationList',component:ApplicationListComponent},
    {path:'ProfileSettings',component:ProfileSettingsComponent,children:[
      {path:'Eductions',component:ProfileSettingsEductionsComponent}
    ]},
    {path:'ProfileEvents',component:ProfileEventsComponent},
    {path:'CompanySpontaniousApplication',component:CompanySpontaniousApplicationComponent},
    {path:'GetTest/:SkillsId',component:GetTestComponent},
    {path:'GetQuestions/:SkillsId/:SkillsTestId',component:GetQuestionsComponent}
  ]},
  
  
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
